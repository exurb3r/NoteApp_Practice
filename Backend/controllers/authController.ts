import { Request, Response } from "express";
import NoteUser from "../models/User/NoteUser";
import bcrypt from "bcrypt";
import { loginSchema, signUpSchema } from "../schemas/auth.schema";
import jwt from "jsonwebtoken";
import type { JwtUserPayload } from "../types/types.verifyJWT";

export const logInHandler = async (req: Request, res: Response) => {
    const result = loginSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            success: false,
            message: "Username and password are required",
        });
    }

    const { email, password } = result.data;

    try {
        const userFound = await NoteUser.findOne({ email });
        if (!userFound) {
            return res.status(401).json({ success: false, message: "User does not exist" });
        }

        const match = await bcrypt.compare(password, userFound.password);
        if (!match) {
            return res.status(401).json({ success: false, message: "Invalid password" });
        }

        const secret = process.env.ACCESS_TOKEN_SECRET;
        if (!secret) {
            throw new Error("ACCESS_TOKEN_SECRET is missing");
        }

        const payload: JwtUserPayload = { id: String(userFound._id), role: userFound.role };
        const token = jwt.sign(payload, secret, { expiresIn: "1h" });

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 3600000,
        });

        return res.status(200).json({
            success: true,
            status: 200,
            message: "Login successful",
            data: {
                id: userFound._id,
                email: userFound.email,
                username: userFound.username,
                role: userFound.role,
            },
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: "Something went wrong" });
    }
};

export const signUpHandler = async (req: Request, res: Response) => {
    const result = signUpSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            success: false,
            message: "Invalid input data",
            errors: result.error.flatten().fieldErrors,
        });
    }

    const { firstName, lastName, username, email, password } = result.data;

    try {
        const existingUser = await NoteUser.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "A user with that email or username already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await NoteUser.create({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword,
            role: 452,
            joinDate: new Date(),
        });

        return res.status(201).json({
            success: true,
            status: 201,
            message: "User created successfully",
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: "Something went wrong" });
    }
};

export const logOutHandler = (_req: Request, res: Response) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });
    return res.status(200).json({ success: true, message: "Logged out" });
};