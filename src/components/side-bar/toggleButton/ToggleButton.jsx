import { SlMenu } from "react-icons/sl";
import { MdClose } from "react-icons/md";



const ToggleButton = ({ open, setOpen }) => {
    return (
        <button onClick={() => setOpen(!open)}>
            {open ? <MdClose /> : <SlMenu />}
        </button>
    );

}

export default ToggleButton