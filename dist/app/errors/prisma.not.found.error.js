import { StatusCodes } from "http-status-codes";
const handleNotFoundError = (err) => {
    const error = [
        {
            path: '',
            message: `Requested resource not found`,
        },
    ];
    return {
        statusCode: StatusCodes.NOT_FOUND,
        message: 'Resource not found error',
        error,
    };
};
export default handleNotFoundError;
