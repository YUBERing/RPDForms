import React from 'react';

const Input = (props) => {
    const {
        label,
        value,
        onChange,
    } = props;

    return (
        <div className={'input'}>
            {
                label &&
                <div className={'input__header'}>
                    {label}
                </div>
            }
            <input
                value={value}
                onChange={onChange}
                className={'input__field'}
            />
        </div>
    );
};

export default Input;