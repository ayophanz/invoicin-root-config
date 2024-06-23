export function prefix(
	location: { pathname: string; href: string | string[]; origin: string },
	...prefixes: string[]
) {
	return prefixes.some(
		prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
	);
}

export function nav() {
	return true;
}

export function organization(location: {
	pathname: string;
	href: string | string[];
	origin: string;
}) {
	return prefix(location, 'organization');
}

export function customer(location: {
	pathname: string;
	href: string | string[];
	origin: string;
}) {
	return prefix(location, 'customer');
}
