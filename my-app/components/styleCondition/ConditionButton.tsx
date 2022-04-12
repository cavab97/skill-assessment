
export default function ConditionActiveButton(onFocus: boolean) {
    try {
        if (onFocus == true) {
            return ` ActiveConditionBtn ActiveConditionFont`
        } else {
            return `DeactiveConditionFont DeactiveConditionBtn`

        }
    } catch (error) {
        console.log(error)
    }

}
