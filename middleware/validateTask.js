const Joi = require('joi');

const taskValidationSchema = Joi.object({
    title: Joi.string().min(1).required(),
    deadline: Joi.date().required(),
    isDone: Joi.boolean(),
});

const validateTask = async (req, res, next) => {
    const { error } = taskValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();

};

module.exports = validateTask;