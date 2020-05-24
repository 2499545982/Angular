import { Menu } from './menu';
import { Product } from './product';

export const MENUS: Menu[] = [
    { name: '特性', url: '#' },
    { name: '企业', url: 'https://v4.bootcss.com' },
    { name: '支持', url: '#' },
    { name: '价格', url: '#' },
]

export const PRODUCT: Product[] = [
    { category: '免费版', pricing: { price: 0, unit: '月' }, features: ['包括 10 个用户', '2 GB 存储空间', '电子邮件支持', '帮助中心访问'], action: '注册免费使用' },
    { category: '免费版', pricing: { price: 15, unit: '月' }, features: ['包括 20 个用户', '10 GB 存储空间', '优先电子邮件支持', '帮助中心访问'], action: '开始' },
    { category: '免费版', pricing: { price: 29, unit: '月' }, features: ['包括 30 个用户', '15 GB 存储空间', '电话和电子邮件支持', '帮助中心访问'], action: '联系我们' },
]