
export default function ActiveButtonCategory(onFocus: boolean) {
    try {
        if (onFocus == true) {
            return `mobile:p-2 desktop:p-1 desktopXL:p-1 laptop:p-1 ActiveCategoryBtn ActiveCategoryFont `
        } else {
            return `mobile:p-2 desktop:p-1 desktopXL:p-1 laptop:p-1 DeactiveCategoryFont DeactiveCategoryBtn`

        }
    } catch (error) {
        console.log(error)
    }

}
