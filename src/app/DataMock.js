export const Data = {
    products: [{
        value: 1,
        label: 'ROLLER BLIND BWC',
        code: 'RB TW',
        name: 'ROLLER BLIND BWC',
        price: 2800.00,
        typeIndex: 0,
        meterials: [
            { value: 1, label: 'M-SILVER GREY' },
            { value: 2, label: 'V-LIMESTONE' },
        ],
        components: [
            { title: 'Single bracket', free: true, price: 100.2 },
            { title: 'Chain holder', free: true, price: 22.2 },
            { title: 'Stopper', free: true, price: 222.2 },
            { title: 'Double bracket', free: false, price: 222.2 },
        ]
    }],
    productTypes: [{
        fields: [
            { title: 'Meterial width', name: 'meterialWidth', type: 'number' },
            { title: 'Meterial drop', name: 'meterialDrop', type: 'number' }
        ]
    }]
}