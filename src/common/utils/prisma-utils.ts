export function buildOrderBy(orderBy: string, orderDirection: 'asc' | 'desc') {
    if (!orderBy) return undefined;

    // Support nested sorting (e.g. "edital.numero")
    return orderBy.split('.').reduceRight(
        (acc, part) => ({ [part]: acc }),
        orderDirection as any
    );
}
