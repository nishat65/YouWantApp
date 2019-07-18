import React from "react";
import { FormControl, FormGroup, Image } from "react-bootstrap";
import classnames from "classnames";

const InputField = props => {
    let {
        type,
        placeholder,
        name,
        value,
        error,
        onChange,
        readOnly,
        label,
        className,
        id,
        required,
        defaultValue,
        icon,
        rows,
        onFocus,
        ltitle,
        helpText,
        onKeyPress = () => { }
    } = props;
    return (
        <FormGroup className={classnames("", { "has-error": error })}>
            {label ? (
                <span>
                    <label htmlFor={id} id={ltitle}>
                        {label}
                    </label>
                    {required ? <sup>*</sup> : null}
                </span>
            ) : null}
            {type !== "textarea" ? (
                <FormControl
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={className}
                    defaultValue={defaultValue}
                    id={id}
                    readOnly={readOnly}
                    onFocus={onFocus}
                    onKeyPress={onKeyPress}
                />
            ) : (
                    <FormControl
                        placeholder={placeholder}
                        name={name}
                        value={value}
                        onChange={onChange}
                        className={className}
                        defaultValue={defaultValue}
                        s
                        id={id}
                        rows={rows}
                        componentClass="textarea"
                        onFocus={onFocus}
                    />
                )}
            {/* {helpText ? <HelpBlock>{helpText}</HelpBlock> : null} */}
            {icon ? <Image src={icon} /> : null}
            {error && <span className="help-block error">{error}</span>}
        </FormGroup>
    );
};

export default InputField;
