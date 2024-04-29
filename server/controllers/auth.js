import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import nodemailer from 'nodemailer'

import student from '../models/student.js'
import warden from "../models/warden.js"
import emailOtp from "../models/emailOtp.js"

export const studentVerification = async (req, res) => {
    const { enrollment, email } = req.body;
    try {
        const existingUser = await student.findOne({ enrollment });
        if(existingUser){
            return res.status(404).json({message: "User exists with same enrollment number"})
        }
        const generatedOTP = Math.floor(1000 + Math.random() * 9000);
        await emailOtp.create({ email: email, otp: generatedOTP });
        mailer(email, generatedOTP)
        return res.status(200).json({ message: "Check your email for OTP" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong, OTP not generated" });
    }
};


export const studentSignup = async (req, res) => {
    const {name, enrollment, email, password, hostel, otp} = req.body;
    try {
        if(!studentVerification){
            return res.status(404).json({message: "User Verification failed"})
        }
        const data = await emailOtp.findOne({ email: email, otp: otp });
        if(data){
            const hashedPassword = await bcrypt.hash(password, 12)
            const newUser = await student.create({ name, enrollment, email, password: hashedPassword, hostel })
            const token = jwt.sign({enrollment: newUser.enrollment, id:newUser._id}, "test", { expiresIn: '1h'})
            res.status(200).json({result: newUser, token})
        } else{
            res.status(404).json({message: "Invalid OTP"})
        }
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
    const { employee, email } = req.body;
    try {
        const existingUser = await student.findOne({ employee });
        if(existingUser){
            return res.status(404).json({message: "User exists with same employee number"})
        }
        const generatedOTP = Math.floor(1000 + Math.random() * 9000);
        await emailOtp.create({ email: email, otp: generatedOTP });
        mailer(email, generatedOTP)
        return res.status(200).json({ message: "Check your email for OTP" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong, OTP not generated" });
    }
};


export const wardenSignup = async (req, res) => {
    const {name, employee, email, password, hostel, otp} = req.body;
    try {
        if(!wardenVerification){
            return res.status(404).json({message: "User Verification failed"})
        }
        const data = await emailOtp.findOne({ email: email, otp: otp });
        if(data){
            const hashedPassword = await bcrypt.hash(password, 12)
            const newUser = await warden.create({ name, employee, email, password: hashedPassword, hostel })
            const token = jwt.sign({employee: newUser.employee, id:newUser._id}, "test", { expiresIn: '1h'})
            res.status(200).json({result: newUser, token})
        } else{
            res.status(404).json({message: "Invalid OTP"})
        }
    } catch (error) {
        res.status(500).json("Something went wrong...")
    } 
}

export const wardenLogin = async (req, res) => {
     const {employee, password} = req.body;
     try {
        const existingUser = await warden.findOne({ employee });
        if(!existingUser){
            return res.status(404).json({message: "User don't exist"})
        }

        const isPasswordCrt = await bcrypt.compare(password, existingUser.password)
        if(!isPasswordCrt){
            return res.status(400).json({message: "Invalid credentials"})
        }
        const token = jwt.sign({employee: existingUser.employee, id:existingUser._id}, "test", { expiresIn: '1h'})
        res.status(200).json({result: existingUser, token})
     } catch (error) {
        res.status(500).json("something went wrong...")
     }
}

const mailer = (email, generatedOTP) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: process.env.PORT || 5000,
        secure: false, 
        auth: {
          user: process.env.USER,
          pass: process.env.PASS,
        },
      });

      const mailOptions = {
        from: {
            name: 'Outpass System',
            address: process.env.USER
        },
        to: email,
        subject: "OTP for user verification",
        html: `<h2>OTP for user verification</h2><p>Dear user, your OTP for email verification for ${email} is:</p><h3>${generatedOTP}</h3><p>Use this otp to verify your email and get registered to our Outpass Portal.<br></br>Please do not share this OTP with anyone for security reasons.<br></br>Thank You</p><br><p>Regards <br> <span><b>Team Outpass Portal</b></span></p>`,
      }

      transporter.sendMail(mailOptions), function(error, info) {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent' + info.response);
        }
    }
}