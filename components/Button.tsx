import { Text, TouchableOpacity } from "react-native"

const Button = ({ text, color, onPress }: any) => {
    return (
        <TouchableOpacity onPress={onPress} style={{backgroundColor: color}}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button