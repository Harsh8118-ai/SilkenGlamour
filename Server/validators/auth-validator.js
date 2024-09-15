const { z } = require("zod");

const signupSchema = z.object({
    fullname: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(255, { message: "Name must not be more than 255 characters." }),

    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(3, { message: "Email must be at least 3 characters." })
    .max(255, { message: "Email must not be more than 255 characters." }),

    mobileNumber: z
    .string({ required_error: "Phone Number is required" })
    .trim()
    .min(10, { message: "Phone Number must be at least 10 characters." })
    .max(20, { message: "Phone Number must not be more than 20 characters." }),

    password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be at least 7 characters." })
    .max(1024, { message: "Password must not be more than 1024 characters." }),

    apartmentNumber: z
    .string({ required_error: "Apartment Number is required" })
    ,

    pincode: z
    .string({ required_error: "Pincode is required" })
    .trim()
    .min(6, { message: "Pincode must be at least 6 characters." })
    .max(1024, { message: "Pincode must not be more than 1024 characters." }),

    town: z
    .string({ required_error: "Town is required" })
    .trim()
    .min(1, { message: "Town must be at least 1 character." })
    .max(1024, { message: "Town must not be more than 1024 characters." }),

    street: z
    .string({ required_error: "Street is required" })
    .trim()
    .min(3, { message: "Street must be at least 3 characters." })
    .max(1024, { message: "Street must not be more than 1024 characters." }),
});

module.exports = signupSchema;
