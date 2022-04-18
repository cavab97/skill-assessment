
export default function ConditionActiveButton(onFocus: boolean) {
    try {
        if (onFocus == true) {
            return `desktop:p-1 mobile:p-2 ActiveConditionBtn ActiveConditionFont`
        } else {
            return `desktop:p-1 mobile:p-2 DeactiveConditionFont DeactiveConditionBtn`

        }
    } catch (error) {
        console.log(error)
    }

}
