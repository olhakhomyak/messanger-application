AccountsTemplates.addFields([
    {
        _id: 'city',
        type: 'select',
        displayName: 'City',
        select: [
            {
                text: 'Lviv',
                value: 'lviv'
            },
            {
                text: 'Kyiv',
                value: 'kyiv'
            },
            {
                text: 'Dnipro',
                value: 'dnipro'
            },
            {
                text: 'Odesa',
                value: 'odesa'
            }
        ],
        required: true
    }
]);