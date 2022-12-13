const PasswordLength = (props) => {
    const {value, onChange} = props;

    return (
        <div className="items-center box-border flex break-words text-center">
            <span className="mr-2.5">Длина пароля:</span>
            <input type="range"
                   name="length"
                   className="bg-very-light-grey"
                   min="1"
                   max="60"
                   value={value}
                   onChange={onChange}/>
            <input type="number"
                   name="length"
                   className="bg-very-light-grey w-16 h-9 ml-2.5 p-1 outline-0 rounded"
                   min="1"
                   max="60"
                   value={value}
                   onChange={onChange}/>
        </div>
    );
};

export default PasswordLength;