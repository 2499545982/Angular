import { Menu } from './menu';
import { Price, Product } from './product';
export const MENUS: Menu[] = [
    { name: '特性', url: '#' },
    { name: '企业', url: 'https://1199911.xyz' },
    { name: '支持', url: '#' },
    { name: '价格', url: '#' },
]

export const PRODUCTS: Product[] = [
    {
        category: '免费版', pricing: { price: 0, unit: '月' },
        features:
            ['10 users included',
                '2 GB of storage',
                'Email support',
                'Help center access'
            ],
        action: '免费使用'
    },
    {
        category: '专业版', pricing: { price: 15, unit: '月' },
        features:
            ['20 users included',
                '10 GB of storage',
                'Priority email support',
                'Help center access'
            ],
        action: '立即使用'
    },
    {
        category: '企业版', pricing: { price: 29, unit: '月' },
        features:
            ['30 users included',
                '15 GB of storage',
                'Phone and email support',
                'Help center access'
            ],
        action: '联系我们'
    },
]