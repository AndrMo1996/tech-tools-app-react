export const WorkHoursTableColums = [
    {
        title: 'Type',
        field: 'type'
    },
    {
        title: 'Summary',
        field: 'summary',
        cellStyle: {
            width: '50%',
            maxWidth: '100%'
        },
        render:
            rowData =>
                <a
                    href={rowData.taskUrl}
                >
                    {rowData.summary}
                </a>
    },
    {
        title: 'Reporter',
        field: 'reporter',
    },
    {
        title: 'Assignee',
        field: 'assignee'
    },
    {
        title: 'Original estimate',
        field: 'estimate',
        type: 'numeric'
    },
    {
        title: 'Log Hours',
        field: 'logHours',
        type: 'numeric'
    }
]

export const TechEngineers = [
    {
        title: 'First_Name_1 Last_name_1',
        field: 'First_Name_1 Last_name_1'
    },
    {
        title: 'First_Name_2 Last_name_2',
        field: 'First_Name_2 Last_name_2'
    },
    {
        title: 'First_Name_N Last_name_N',
        field: 'First_Name_N Last_name_N',
    }
]

