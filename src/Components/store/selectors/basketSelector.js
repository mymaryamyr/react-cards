export const totalCount = basket => {
    const items = basket.items
    let count = 0;
    for (let key in items) {
        count += items[key].count
    }
    return count
}