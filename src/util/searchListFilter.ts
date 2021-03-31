//** Pass in fetched list of breeds and filter by the input search term. */
//**If there isn't a term, return unchanged list. */
type Filter = (
    list: { name: string; id: string }[],
    term?: string
) => { name: string; id: string }[];

export const filterCatList: Filter = (list, term) => {
    if (term) {
        const filteredList = list.filter(
            (cat: { name: string; id: string }) => {
                return cat.name.includes(term);
            }
        );
        return filteredList;
    } else {
        return list;
    }
};
