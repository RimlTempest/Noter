import { NavItemType } from '../../types/navItemType';

export const NAV_ITEMS: Array<NavItemType> = [
    {
        label: 'ノートの作成',
        children: [
            {
                label: '新規作成',
                subLabel: '空の状態から新規ノートを作成します',
                href: '/create',
            },
            // {
            //     label: 'サンプルから新規作成',
            //     subLabel: 'サンプルを選んでそこから新規ノートを作成します。',
            //     href: '/sample',
            // },
        ],
    },
    // {
    //     label: 'お問い合わせ',
    //     href: '/contact',
    // },
];
