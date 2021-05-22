import React from "react";

const PasswordStrengthIndicator = ({
    validity: { minChar, number, specialChar }
}) => {
    return (
        <div className="password-meter text-left mb-4">
            <p className="text-dark">La contraseña debe tener:</p>
            <ul className="text-muted">
                <PasswordStrengthIndicatorItem
                    isValid={number}
                    text="Como minimo 1 numero"
                />
                <PasswordStrengthIndicatorItem
                    isValid={specialChar}
                    text="Debe tener 1 caracter especial"
                />
            </ul>
        </div>
    );
};

const PasswordStrengthIndicatorItem = ({ isValid, text }) => {
    const highlightClass = isValid
        ? "text-success"
        : isValid !== null
        ? "text-danger"
        : "";
    return <li className={highlightClass}>{text}</li>;
};

export default PasswordStrengthIndicator;