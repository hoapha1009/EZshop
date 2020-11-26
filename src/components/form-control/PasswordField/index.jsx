import { OutlinedInput } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { form, label, name, disabled } = props;
    const { errors } = form;
    const hasError = !!errors[name];
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword((x) => !x);
    };
    return (
        <FormControl error={hasError} fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Controller
                id={name}
                label={label}
                name={name}
                control={form.control}
                as={OutlinedInput}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                disabled={disabled}
                error={hasError}
            />
            <FormHelperText error={hasError}>{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default PasswordField;
