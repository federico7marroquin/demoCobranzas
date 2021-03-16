import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Grid } from '@material-ui/core';

export default function MaterialUIPickers() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container spacing={2} alignItems="flex-end">
                    <Grid item>
                        <KeyboardDatePicker
                            disableToolbar
                            inputVariant="outlined"
                            size="small"
                            variant="inline"
                            format="MM/dd/yyyy"
                            id="date-picker-inline"
                            label="Fecha inicial"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                    <Grid item >
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            size="small"
                            inputVariant="outlined"
                            format="MM/dd/yyyy"
                            id="date-picker-inline2"
                            label="Fecha final"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
    );
}