//** Pass in fetched list of breeds and filter by the input search term. */
//**If there isn't a term, return unchanged list. */
type Filter = (
    list: { name: string; id: string }[],
    term?: string
) => { name: string; id: string }[];

export const filterCatList: Filter = (list, term) => {
    if (term) {
        //** Map over array of objects and adjust the name propert to be lowercase */
        const lowerCasedList = list.map((breed) => {
            return { name: breed.name.toLowerCase(), id: breed.id };
        });

        //** Mutate the term variable to be lowercase*/
        const lowerCasedTerm = term.toLowerCase();

        //** Filter the objects that have a name property that match include the term provided*/
        const filteredList = lowerCasedList.filter((breed) => {
            return breed.name.includes(lowerCasedTerm);
        });

        //** Use CSS to capitalize the first letter in the search results*/
        return filteredList;
    } else {
        return list;
    }
};
