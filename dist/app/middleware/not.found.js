import { StatusCodes } from 'http-status-codes';
const notFound = (req, res, next) => {
    res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: 'Not Found Api',
        error: '',
    });
};
export default notFound;
