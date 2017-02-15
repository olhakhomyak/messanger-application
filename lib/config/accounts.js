AccountsTemplates.configure({
    enablePasswordChange: true,
    showPlaceholders: true
});

AccountsTemplates.addFields([
    {
        _id: 'firstName',
        type: 'text',
        displayName: 'First name',
        required: true
    },
    {
        _id: 'lastName',
        type: 'text',
        displayName: 'Last name',
        required: true
    },
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