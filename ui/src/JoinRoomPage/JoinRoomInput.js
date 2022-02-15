
const Input = (({ placeholder, value, changeHandler }) => {
    return (
        <input
        value={value}
        onChange={changeHandler}
        className="join_room_input"
        placeholder={placeholder}
        />
    )
})

const JoinRoomInput = (props) => {

    const { roomIdValue, setRoomIdValue, nameValue, setNameValue, isRoomHost } = props;

    const handleRoomIdValueChange = (event) => {
        setRoomIdValue(event.target.value);
    };

    const handleNameValueChange = (event) => {
        setNameValue(event.target.value);
    };

    return (
        <>
            <div className="join_room_inputs_container">
                { !isRoomHost && (
                    <Input 
                    placeholder={'Enter meeting Id'}
                    value={roomIdValue}
                    changeHandler={handleRoomIdValueChange}
                    />
                )}
                <Input 
                placeholder={'Enter name'}
                value={nameValue}
                changeHandler={handleNameValueChange}
                />
            </div>
        </>
             
    );
};
 
export default JoinRoomInput;