import Home from './pages/home.js'
import NotFound from './pages/notFound.js'

import CK_MODM from './pages/projects/ck_modm.js'

//recursively parses the routes
const parseRoutes = (routes, base_url = '') => {
	return routes
		.map(route => {
			const obj = {
				path: base_url + route.path,
				component: route.component,
			}

			if (!route.subRoutes) return obj

			return [obj, ...parseRoutes(route.subRoutes, base_url + route.path)]
		})
		.flat()
}


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/projects',
        component: NotFound,
        subRoutes: [
            {
                path: '/ck_modm',
                component: CK_MODM
            }
        ]
    }
]

export default parseRoutes(routes);
