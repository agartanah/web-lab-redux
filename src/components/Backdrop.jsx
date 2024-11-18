import { useSelector } from "react-redux";

export default function Backdrop() {
    const currOperation = useSelector((state) => state.tasks.currOperation);
    
    return (
        <div className={ currOperation !== '' ? "backdrop backdrop-open" : "backdrop" }></div>
    );
}