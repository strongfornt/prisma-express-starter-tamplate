import catchAsync from "../utils/catch-async";
export const validationMiddleWare = (schema) => {
    return catchAsync(async (req, res, next) => {
        // const { data } = req.body;
        await schema.parseAsync(req?.body);
        next();
    });
};
