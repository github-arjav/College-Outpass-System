import forgotPassOtp from "../models/forgotPassOtp.js";
import student from "../models/student.js";
import warden from "../models/warden.js";
import bcrypt from "bcryptjs"
import nodemailer from 'nodemailer'

export const sendStudentOtp = async (req, res) => {
    const { enrollment, email } = req.body;
    try {
        const studentUser = await student.findOne({ enrollment, email });
        if (studentUser) {
            const generatedOTP = Math.floor(1000 + Math.random() * 9000);
            await forgotPassOtp.create({ enrollment, email, otp: generatedOTP });
            mailer(email, generatedOTP)
            return res.status(200).json({ message: "OTP sent, please check your email" });
        } else {
            return res.status(404).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Cannot send OTP" });
    }
};

export const sendWardenOtp = async (req, res) => {
    const { employee, email } = req.body;
    try {
        const wardenUser = await warden.findOne({ employee, email });
        if (wardenUser) {
            const generatedOTP = Math.floor(1000 + Math.random() * 9000);
            await forgotPassOtp.create({ employee, email, otp: generatedOTP });
            mailer(email, generatedOTP)
            return res.status(200).json({ message: "OTP sent, please check your email" });
        } else {
            return res.status(404).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Cannot send OTP" });
    }
};

export const verifyStudentOtp = async (req, res) => {
    const { enrollment, email, otp } = req.body
    try {
        const data = await forgotPassOtp.findOne({ enrollment: enrollment, email: email, otp: otp})
        if (data) {
            return res.status(200).json("Otp Verified")
        } else {
            return res.status(404).json("incorrect otp")
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "something went wrong..."})
    }
}

export const verifyWardenOtp = async (req, res) => {
    const { employee, email, otp } = req.body
    try {
        const data = await forgotPassOtp.findOne({ employee: employee, email: email, otp: otp})
        if (data) {
            return res.status(200).json({message: "Otp Verified"})
        } else {
            return res.status(404).json({message: "incorrect otp"})
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "something went wrong..."})
    }
}

export const changeStudentPass = async (req, res) => {
    const { enrollment, email, password} = req.body
    try {
        const User = await student.findOne({enrollment, email})
        const hashedPassword = await bcrypt.hash(password, 12)
        User.password = hashedPassword
        await User.save();
        return res.status(200).json({ message: "Password changed successfully" });

    } catch (error) {
        return res.status(500).json({message: "Cannot change the password"})
    }
}

export const changeWardenPass = async (req, res) => {
    const { employee, email, password} = req.body
    try {
        const User = await warden.findOne({employee, email})
        const hashedPassword = await bcrypt.hash(password, 12)
        User.password = hashedPassword
        await User.save();
        return res.status(200).json({ message: "Password changed successfully" });

    } catch (error) {
        return res.status(500).json({message: "Cannot change the password"})
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
        subject: "OTP for changing password",
        html: `<h2>OTP for changing Password</h2><p>Dear user, your OTP for changing password for ${email} is:</p><h3>${generatedOTP}</h3><p>Use this otp to change your password and get access to our Outpass Portal.<br></br>Please do not share this OTP with anyone for security reasons.<br></br>Thank You</p><br><p>Regards <br> <span><b>Team Outpass Portal</b></span></p>`,
      }

      transporter.sendMail(mailOptions), function(error, info) {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent' + info.response);
        }
    }
}