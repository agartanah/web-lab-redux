import { useSelector } from "react-redux";
import selector from "../redux/selectors/selector";

export default function Backdrop() {
    const currOperation = useSelector((state) => selector(state));
    
    return (
        <div className={ currOperation !== '' ? "backdrop backdrop-open" : "backdrop" }></div>
    );
}