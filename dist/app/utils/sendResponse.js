const sendResponse = (res, data) => {
    res.status(data?.statusCode).json({
        success: data?.success,
        message: data?.message,
        statusCode: data?.statusCode,
        totalCount: data?.totalCount,
        data: data?.data,
    });
};
export default sendResponse;
