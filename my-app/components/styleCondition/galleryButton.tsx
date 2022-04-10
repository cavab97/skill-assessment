
export default function ActiveButton(onFocus: boolean) {
    try {
        if (onFocus == true) {
            return `p-2 w-6/12 activeButton bg-white `
        } else {
            return `p-2 w-6/12 bg-white deActiveButton`

        }
    } catch (error) {
        console.log(error)
    }

}
