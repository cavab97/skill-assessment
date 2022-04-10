
export default function ActiveButtonCategory(onFocus: boolean) {
    try {
        if (onFocus == true) {
            return ` ActiveCategoryBtn ActiveCategoryFont`
        } else {
            return `DeactiveCategoryFont DeactiveCategoryBtn`

        }
    } catch (error) {
        console.log(error)
    }

}
