


const charts = {
    id: 0,
    header: '',
    divider: true,
    routes: [
        {
            id: 0,
            route: 'contactability',
            label: 'Contactabilidad',
        },
        {
            id: 2,
            route: 'Calls',
            label: 'Llamadas',
        },
        {
            id: 3,
            route: 'compromises',
            label: 'Compromisos',
        },
        {
            id: 1,
            route: 'compliance',
            label: 'Cumplimientos',
        },
        {
            id: 4,
            route: 'tops',
            label: 'Razones de no pago',
        },
    ],
}

const beproCollect = {
    id: 1,
    header: 'Be-Pro Collect',
    divider: false,
    routes: [
        {
            id: 0,
            route: 'overview',
            label: 'Overview',
        },
        {
            id: 1,
            route: 'conversations',
            label: 'Conversaciones',
        },
    ],
}



const campaigns = {
    id: 0,
    header: 'Campañas',
    divider: true,
    routes:[
        {
            id: 0,
            route: 'campaign/list',
            label: 'Lista de campañas',
        },
        {
            id: 1,
            route: 'campaign/create',
            label: 'Crear campañas',
        },
    ]
}

const general = {
    id: 1,
    header: '',
    divider: false,
    routes:[
        {
            id: 0,
            route: 'notifications',
            label: 'Notificaciones', 
        },
        {
            id: 1,
            route: 'users',
            label: 'Usuarios',
        }
    ]
}

// const users = {
//     header: '',
//     divider: true,
//     routes: [
//         {
//             id: 1,
//             route: 'users',
//             label: 'Usuarios',
//         }
//     ]
// }

export const statistics = [
    charts,
    beproCollect
]

export const config = [
    campaigns,
    general,
] 


