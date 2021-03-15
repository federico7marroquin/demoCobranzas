import React, { useState } from 'react'

import { useStyles } from '../../styles/containers/styles'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import UserDialog from '../../components/Dialogs/UserDialog'
import SearchBar from '../../components/SearchBar/SearchBar'
import Table from '../../components/Table/GenericTable'


const headCells = [
    { id: 'name', disablePadding: true, label: 'Nombre' },
    { id: 'email', disablePadding: false, label: 'Correo' },
    { id: 'role', disablePadding: false, label: 'Rol' },
    { id: 'entry', disablePadding: false, label: 'Último Ingreso' },
]


function createUser(name, email, role, entry='18 Ene, 2021', id=1) {
    return { name, email, role, entry, id }
}
const rows = [
    createUser('Sandra Diaz', 'sdias@be-prosolutions.com', 'Administrador', '18 Ene, 2021', 0),
    createUser('simon bolivar', 'sbolivar@be-prosolutions.com', 'Escritor', '10 Ene, 2021', 1),
    createUser('Asesor', 'asesor@be-prosolutions.com', 'Lector', '20 Dic, 2020', 2),
    createUser('Legoshi', 'Legoshi@be-prosolutions.com', 'Escritor', '15 Nov, 2020', 3),
    createUser('Hannibal Lecter', 'hannibal@be-prosolutions.com', 'Lector', '15 Nov, 2020', 4),
    createUser('Mikasa ackerman', 'ackerman@be-prosolutions.com', 'Administrador', '10 Ene, 2021', 5),
    createUser('Wanda Maximoff', 'wmaximoff@be-prosolutions.com', 'Escritor', '15 Nov, 2020', 6),
    createUser('Pedro Pascal', 'ppascal@be-prosolutions.com', 'Lector', '15 Nov, 2020', 7),
    createUser('Din Djarin', 'dindjarin@be-prosolutions.com', 'Administrador', '4 Ene, 2021', 8),
    createUser('Edwin Smith', 'edsmith@be-prosolutions.com', 'Escritor', '15 Nov, 2020', 9),
    createUser('Rigoberto Uran', 'Uran@be-prosolutions.com', 'Lector', '15 Nov, 2020', 10),
]



export default function UsersContainer(props) {
    const classes = useStyles()
    
    const [openDialog, setOpenDialog] = useState(false)
    const [openEditDialog, setOpenEditDialog] = useState(false)
    const [filterRows, setFilterRows] = useState(rows)
    const [user, setUser] = useState({})

    const handleOpenDialog = () => {
        setOpenDialog(true)
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    const handleOpenEditDialog = () => {
        setOpenEditDialog(true)
    }
    const handleCloseEditDialog = () => {
        setOpenEditDialog(false)
    }

    const setActualDate = () => {
        const date = new Date()
        const year = new Intl.DateTimeFormat('es', { year: 'numeric' }).format(date)
        const month = new Intl.DateTimeFormat('es', { month: 'short' }).format(date)
        const day = new Intl.DateTimeFormat('es', { day: '2-digit' }).format(date)
        return `${day} ${month} ${year}`
    }

    const addUser = ({ name, email, role, id }) => {
        const entry = setActualDate()
        const newUser = createUser(name, email, role, entry, id)
        rows.push(newUser)
    }

    const editUser = ({ name, email, role, id }) => {
        const entry = setActualDate()
        const newUser = createUser(name, email, role, entry, id)
        const newRows = filterRows.map(_user => _user.id === id ? newUser : _user)
        rows.splice(newUser.id, 1, newUser)
        setFilterRows(newRows)
    }

    const displayUser = (tempUser) => {
        setUser(tempUser)
        handleOpenEditDialog()
    }

    const searchUser = (value) => {
        if (value === '') {
            setFilterRows(rows)
        }
        else {
            let filtered = rows.filter(_user => _user.name.toLowerCase().includes(value.toLowerCase()))
            setFilterRows(filtered)
        }
    }


    return (
        <>
            <Container maxWidth="lg" className={classes.container} >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <SearchBar
                            searchFunction={searchUser}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paperMail}>
                            <Table
                                title="Usuarios"
                                headCells={headCells}
                                values={filterRows}
                                defaultOrder="name"
                                initRowsPerPage={10}
                                setItem={displayUser}
                                addFunction={handleOpenDialog}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <UserDialog
                open={openDialog}
                handleClose={handleCloseDialog}
                handleAction={addUser}
            />
            <UserDialog
                title="Editar usuario"
                description="Se cambiarán los datos del usuario con los valores diligenciados a continuación."
                buttonLabel="Guardar"
                open={openEditDialog}
                handleClose={handleCloseEditDialog}
                handleAction={editUser}
                userData={user}
                editDialog
            />
        </>
    )
}