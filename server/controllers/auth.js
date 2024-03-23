import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

import student from '../models/student.js'
import warden from "../models/warden.js"

export const studentVerification = async (req, res) => {
    const { enrollment } = req.body;
    try {
        const existingUser = await student.findOne({ enrollment });
        if(existingUser){
            return res.status(200).json({message: "User exist"})
        }
    } catch (error) {
        res.status(500).json("Something went wrong...")
    }
}

export const studentSignup = async (req, res) => {
    const {name, enrollment, email, password, hostel} = req.body;
    try {
        const existingUser = await student.findOne({ enrollment });
        if(existingUser){
            return res.status(404).json({message: "User already exist..."})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await student.create({ name, enrollment, email, password: hashedPassword, hostel })
        const token = jwt.sign({enrollment: newUser.enrollment, id:newUser._id}, "test", { expiresIn: '1h'})
        res.status(200).json({result: newUser, token})
    } catch (error) {
        res.status(500).json("Something went wrong...")
    } 
}

export const studentLogin = async (req, res) => {
     const {enrollment, password} = req.body;
     try {
        const existingUser = await student.findOne({ enrollment });
        if(!existingUser){
            return res.status(404).json({message: "User don't exist"})
        }

        const isPasswordCrt = await bcrypt.compare(password, existingUser.password)
        if(!isPasswordCrt){
            return res.status(400).json({message: "Invalid credentials"})
        }
        const token = jwt.sign({enrollment: existingUser.enrollment, id:existingUser._id}, "test", { expiresIn: '1h'})
        res.status(200).json({result: existingUser, token})
     } catch (error) {
        res.status(500).json("something went wrong...")
     }
}


export const wardenVerification = async (req, res) => {
    const { employee } = req.body;
    try {
        const existingUser = await warden.findOne({ employee });
        if(existingUser){
            return res.status(200).json({message: "User exist"})
        }
    } catch (error) {
        res.status(500).json("Something went wrong...")
    }
}

export const wardenSignup = async (req, res) => {
    const {name, employee, email, password, hostel} = req.body;
    try {
        const existingUser = await warden.findOne({ employee });
        if(existingUser){
            return res.status(404).json({message: "User already exist..."})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await warden.create({ name, employee, email, password: hashedPassword, hostel })
        const token = jwt.sign({employee: newUser.employee, id:newUser._id}, "test", { expiresIn: '1h'})
        res.status(200).json({result: newUser, token})
    } catch (error) {
        res.status(500).json("Something went wrong...")
    } 
}

export const wardenLogin = async (req, res) => {
     const {employee, password} = req.body;
     try {
        const existingUser = await student.findOne({ employee });
        if(!existingUser){
            return res.status(404).json({message: "User don't exist"})
        }

        const isPasswordCrt = await bcrypt.compare(password, existingUser.password)
        if(!isPasswordCrt){
            return res.status(400).json({message: "Invalid credentials"})
        }
        const token = jwt.sign({enrollment: newUser.enrollment, id:newUser._id}, "test", { expiresIn: '1h'})
        res.status(200).json({result: newUser, token})
     } catch (error) {
        res.status(500).json("something went wrong...")
     }
}