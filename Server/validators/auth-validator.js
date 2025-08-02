const { z } = require("zod");


const loginSchema = z.object({
    mobileNumber: z
    .string({ required_error: "Phone Number is required" })
    .trim()
    .min(10, { message: "Phone Number must be of 10 characters." })
    .max(10, { message: "Phone Number must not be more than 10 characters." }),

    password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be at least 8 characters." })
    .max(1024, { message: "Password must not be more than 1024 characters." }),


})

const signupSchema = loginSchema.extend({
    username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(255, { message: "Name must not be more than 255 characters." }),

    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(3, { message: "Email must be at least 12 characters." })
    .max(255, { message: "Email must not be more than 255 characters." }),

});

module.exports = {signupSchema, loginSchema};
