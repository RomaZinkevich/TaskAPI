const Joi = require('joi');

const userValidationSchema = Joi.object({
    username: Joi.string().required(), // Enforcing uniqueness should be handled in the database
    password: Joi.string().min(8).required(),
    role: Joi.string().valid('admin', 'regular').required(),
});

const loginValidationSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
});

const validateUser = async (req, res, next) => {
    const { error } = userValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

const validateLogin = async (req, res, next) => {
    const { error } = loginValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

module.exports = { validateUser, validateLogin };