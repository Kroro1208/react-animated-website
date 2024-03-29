import { SlMenu } from "react-icons/sl";


const ToggleButton = ({ setOpen }) => {
    return (
        <button onClick={() => setOpen((prev) => !prev)}>
            <SlMenu />
        </button>
    );

}

export default ToggleButton