import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/form-control/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './styles.scss';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
};

function TodoForm({ onSubmit }) {
    const schema = yup.object().shape({
        title: yup.string().required('Enter title please!').min(6, 'Enter at least 6 characters!'),
    });
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });
    const handleFormSubmit = (values) => {
        if (!onSubmit) return;
        onSubmit(values);
    };
    return (
        <form onSubmit={form.handleSubmit(handleFormSubmit)}>
            Todo Form:
            <InputField name="title" form={form} label="Todo: " />
        </form>
    );
}

export default TodoForm;
