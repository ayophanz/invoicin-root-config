export function prefix(location: { href: string | string[]; origin: any; }, ...prefixes: string[]) {
    return prefixes.some(
        prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
    );
}

export function nav() {
    return true;
}

export function organization(location: { href: string | string[]; origin: any; }) {
    return prefix(location, 'organization');
}