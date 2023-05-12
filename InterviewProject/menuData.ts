let menuData = [
    {
        path: '/welcome',
        name: 'welcome',
        component: '@/pages/index',
    },
    {
        path: '/a',
        name: 'a',
        component: '@/pages/index',
    },
    {
        path: '/b',
        name: 'b',
        component: '@/pages/index',
        routes: [
            {
                path: '/b/c',
                name: 'b',
                component: '@/pages/index',
            }
        ]
    },
];

let menuDatas = menuData.map(
    (item: any, index) => {
        const key = String(index + 1);

        return {
            key: `${key + '.' + item.path}`,
            path: item.path,
            label: item.name,
            children: item.routes && item.routes.length > 0 ? item.routes.map((items, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey + '.' + items.path,
                    label: items.name,
                    path: items.path,
                };
            }) : null,
        };
    },
);
export { menuData }

export default menuDatas