
export default function ConditionActiveButton(onFocus: boolean) {
    try {
        if (onFocus == true) {
            return `p-2 ActiveConditionBtn ActiveConditionFont`
        } else {
            return `p-2 DeactiveConditionFont DeactiveConditionBtn`

        }
    } catch (error) {
        console.log(error)
    }

}
