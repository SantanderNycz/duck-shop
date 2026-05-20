export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bee.webp","beetleduck.jfif","chuck-duck.jpg","de-volta.jpg","duck.svg","dwight.jfif","emily.jpg","favicon.ico","fiona.jpg","ganduck.jpg","it-the-duck.jpg","ozzy-osduck.jpg","paw.webp","pumpkin.jpg","shakespeare.webp"]),
	mimeTypes: {".webp":"image/webp",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DGsOpKjE.js",app:"_app/immutable/entry/app.B1ruVF3n.js",imports:["_app/immutable/entry/start.DGsOpKjE.js","_app/immutable/chunks/DLKn68dX.js","_app/immutable/chunks/ziRRfoxS.js","_app/immutable/chunks/CusJ1H3i.js","_app/immutable/entry/app.B1ruVF3n.js","_app/immutable/chunks/ziRRfoxS.js","_app/immutable/chunks/zlKxVkeV.js","_app/immutable/chunks/DYCeEr9T.js","_app/immutable/chunks/CusJ1H3i.js","_app/immutable/chunks/BuZbGRTL.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/carrinho",
				pattern: /^\/carrinho\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/privacidade",
				pattern: /^\/privacidade\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/produtos",
				pattern: /^\/produtos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/produto/[id]",
				pattern: /^\/produto\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/sobre",
				pattern: /^\/sobre\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
