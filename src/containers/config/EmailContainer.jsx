import React, { useState, useRef } from 'react'


import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import TemplateDialog from '../../components/Dialogs/TemplateDialog'
import FormDialog from '../../components/Dialogs/FormDialog'
import Table from '../../components/Table/GenericTable'
import MailBox from '../../components/MailBox/MailBox'

import { useStyles } from '../../styles/containers/styles'

import { tutelas } from '../../assets/templates/templates'

const headCells = [
    { id: 'name', disablePadding: true, label: 'Nombre ' },
    { id: 'typologies', disablePadding: false, label: 'Tipología' },
    { id: 'subject', disablePadding: false, label: 'Asunto' },
    { id: 'description', disablePadding: false, label: 'Descripción' },
    { id: 'state', disablePadding: false, label: 'Estado' },
];



//name, typologies, subject, description, date, body, state
function makeTemplate(name, typologies, subject, description, state, date, body) {
    return { name, typologies, subject, description, state, date, body };
}
const rows = [
    makeTemplate('Recordatorios', 'Recordatorios', 'Pagos vencidos', 'Descripción...', 'borrador', '2 Ene. 2021', tutelas.body),
    makeTemplate('Solicitudes pago', 'Solicitud de información', 'Solicitudes', 'Descripción...', 'unico', '22 Dic. 2020', tutelas.body),
    makeTemplate('Borrador pagos', 'Pagos', 'Campaña de pagos', 'Descripción...', 'variante', '20 Dic. 2020', tutelas.body),
    makeTemplate('En proceso de aprovación', 'Autorizaciones', 'Servicio al cliente', 'Descripción...', 'unico', '15 Nov. 2020', tutelas.body),
    makeTemplate('Temporada navideña', 'Avisos', 'Deudas navideñas', 'Descripción...', 'Borrador', '15 Nov. 2020', tutelas.body),
    makeTemplate('Pagos priorizados', 'Pagos', 'Pague sus cuentas', 'Descripción...', 'variante', '20 Dic. 2020', tutelas.body),
];

const typologies = [
    'Solicitud de Información',
    'Peticiones, Quejas y Reclamos',
    'Asuntos Legales',
    'Demandas',
    'Autorizaciones',
    'Aviso prioritario',
    'Suspensiones',
    'Avisos',
    'Consejos',
    'Recordatorios',
    'Pagos',
]


export default function EmailContainer(props) {
    const classes = useStyles();
    const [typOpen, setTypOpen] = useState(false);
    const [templateOpen, setTemplateOpen] = useState(false);
    const [selectedTyp, setSelectedTyp] = useState([]);
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [rules, setRules] = useState('');
    const [alreadyCreated, setAlreadyCreated] = useState(false);
    // const {typologies} = props;
    const [template, setTemplate] = useState({});

    const myRef = useRef(null);



    const executeScroll = () => myRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    // const executeScroll = () => window[`scrollTo`]({ top: 0, behavior: `smooth` });

    const handleClicktypOpen = () => {
        setTypOpen(true);
    };

    const handleCloseTyp = () => {
        setTypOpen(false);
    };

    const handleCloseTemplate = () => {
        setTemplateOpen(false);
    };

    //refactor
    const createTemplate = (rules, subject, body) => {
        setTemplateOpen(true);
        setSubject(subject);
        setBody(body);
        setRules(rules);
        setAlreadyCreated(false);
    }

    //Se necesita terminar TO DO
    const setTemplateToEdit = (item) => {
        // setSubject(item)
        // setBody(item.body)
        // setSelectedTyp(item.typologies)
        console.log('item', item);
        setTemplate(item);
        executeScroll();

    }

    const confirmTemplate = (name, description) => {
        const date = new Date();
        const year = new Intl.DateTimeFormat('es', { year: 'numeric' }).format(date);
        const month = new Intl.DateTimeFormat('es', { month: 'short' }).format(date);
        const day = new Intl.DateTimeFormat('es', { day: '2-digit' }).format(date);
        const newTemplate = makeTemplate(name, template?.typologies, template?.subject, description, 'Borrador', ` ${day} ${month} ${year}`, template?.body);
        setSubject('');
        setBody('');
        setRules('')
        setAlreadyCreated(true);
        rows.push(newTemplate);
    }

    return (
        <>
            <Container maxWidth='lg' className={classes.container}>
                <Grid className={classes.depositContext} container spacing={3}>
                    <Grid item xs={12} ref={myRef}>
                        <Paper className={classes.paperMail}>
                            <MailBox

                                parentSubject={subject}
                                parentBody={body}
                                rules={rules}
                                alreadyCreated={alreadyCreated}
                                createTemplate={createTemplate}

                                handleClicktypOpen={handleClicktypOpen}
                                selectedTyp={selectedTyp}
                                setSelectedTyp={setSelectedTyp}

                                template={template}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paperMail}>
                            <Table
                                title='Plantillas'
                                headCells={headCells}
                                values={rows}
                                defaultOrder='name'
                                initRowsPerPage={5}
                                setItem={setTemplateToEdit}
                            />
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
            <FormDialog
                //functions
                setSelectedTyp={setSelectedTyp}
                selectedTyp={selectedTyp}
                values={typologies}
                //open and close dialog mechanism
                open={typOpen}
                handleClose={handleCloseTyp}
            />
            <TemplateDialog
                createTemplate={confirmTemplate}
                //open and close dialog mechanism
                open={templateOpen}
                handleClose={handleCloseTemplate}
                //Edit template
                template={template}
            />

        </>
    );
}