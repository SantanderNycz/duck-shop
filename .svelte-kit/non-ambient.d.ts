
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/carrinho" | "/privacidade" | "/produtos" | "/produto" | "/produto/[id]" | "/sobre";
		RouteParams(): {
			"/produto/[id]": { id: string }
		};
		LayoutParams(): {
			"/": { id?: string };
			"/carrinho": Record<string, never>;
			"/privacidade": Record<string, never>;
			"/produtos": Record<string, never>;
			"/produto": { id?: string };
			"/produto/[id]": { id: string };
			"/sobre": Record<string, never>
		};
		Pathname(): "/" | "/carrinho" | "/carrinho/" | "/privacidade" | "/privacidade/" | "/produtos" | "/produtos/" | "/produto" | "/produto/" | `/produto/${string}` & {} | `/produto/${string}/` & {} | "/sobre" | "/sobre/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/bee.webp" | "/beetleduck.jfif" | "/chuck-duck.jpg" | "/de-volta.jpg" | "/duck.svg" | "/dwight.jfif" | "/emily.jpg" | "/favicon.ico" | "/fiona.jpg" | "/ganduck.jpg" | "/it-the-duck.jpg" | "/ozzy-osduck.jpg" | "/paw.webp" | "/pumpkin.jpg" | "/shakespeare.webp" | string & {};
	}
}