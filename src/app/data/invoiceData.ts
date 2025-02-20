import { Invoice } from "../models/invoice";

export const invoiceData: Invoice = {

    id: 1,
    name: 'Componentes de PC',
    total: 0,
    client: {
        id: 1,
        name: 'Andres',
        lastname: 'Doe',
        address: {
            id: 1,
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 15,
        }
    },
    company: {
        id: 1,
        name: 'New Age',
        fiscalNumber: 321565
    },
    items: [
        {
            id: 1,
            product: 'CPU Intel i9',
            price: 599,
            quantity: 1,
            total: 0
        },
        {
            id: 2,
            product: 'Corsair Teclado Mecanico',
            price: 399,
            quantity: 2,
            total: 0
        },
        {
            id: 3,
            product: 'Monitor Asus',
            price: 899,
            quantity: 3,
            total: 0
        },
    ]

}