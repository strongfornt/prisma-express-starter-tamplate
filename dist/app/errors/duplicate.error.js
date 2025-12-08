const handleDuplicateError = (err) => {
    const targetField = err?.meta?.target?.[0];
    const error = [
        {
            path: '',
            message: `${targetField} is already exists`,
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: 'Duplicate error',
        error,
    };
};
export default handleDuplicateError;
