import outpass from "../models/outpass.js";
import Pending from '../models/PendingOutpass.js'
import Previous from "../models/PrevOutpass.js";
import Wardens from '../models/warden.js'

export const postAppliedOutpasses = async (req, res) => {
    const { enrollment } = req.body
    try {
        const outpassList = await Pending.find({ enrollment });
        return res.status(200).json(outpassList)
    } catch (error) {
        return res.status(404).json("no outpass")
    }
}

export const sendOutpassDetails = async (req, res) => {
    const { outpassId } = req.body
    try {
        const outpassDetails = await outpass.findOne({ outpassId })
        if(outpassDetails) {
            return res.status(200).json(outpassDetails)
        }
        else {
            return res.status(404).json({message: "no outpass found"})
        }
    } catch (error) {
        return res.status(500).json({message: "cannot find the details of given outpass"})
    }
}

export const showWardenPendingOutpasses = async (req, res) => {
    const { employee } = req.body
    const warden = await Wardens.findOne({ employee })
    try {
            const employeeHostels = warden.hostel;
            const outpasses = await Pending.find({ hostel: { $in: employeeHostels } });
            return res.status(200).json(outpasses)
    } catch (error) {
        return res.status(500).json({message: "cannot find outpasses"})
    }
}

export const approveOutpasses = async (req, res) => {
    const { outpassId } = req.body
    const outpass = await Pending.findOne({ outpassId })
    try {
        if(!outpass){
            return res.status(404).json({message: "Outpass not found"})
        }
        const { name, enrollment, room, duration, fromDate, toDate, hostel, purpose, address, outpassId } = outpass;

        const newOutpass = new Previous({
            name,
            enrollment,
            room,
            duration,
            fromDate,
            toDate,
            hostel,
            purpose,
            address,
            outpassId,
            evaluation: true
        });

        await newOutpass.save();
        await Pending.deleteOne({ outpassId })
        return res.status(200).json("Outpass moved succesfully")
    } catch (error) {
        console.error("Error:", error)
        return res.status(500).json({message: "cannot move the outpass"})
    }
}

export const rejectOutpasses = async (req, res) => {
    const { outpassId } = req.body
    const outpass = await Pending.findOne({ outpassId })
    try {
        if(!outpass){
            return res.status(404).json({message: "Outpass not found"})
        }
        const { name, enrollment, room, duration, fromDate, toDate, hostel, purpose, address, outpassId } = outpass;

        const newOutpass = new Previous({
            name,
            enrollment,
            room,
            duration,
            fromDate,
            toDate,
            hostel,
            purpose,
            address,
            outpassId,
            evaluation: false
        });

        await newOutpass.save();
        await Pending.deleteOne({ outpassId })
        return res.status(200).json("Outpass moved succesfully")
    } catch (error) {
        console.error("Error:", error)
        return res.status(500).json({message: "cannot move the outpass"})
    }
}

export const showWardenPreviousOutpasses = async (req, res) => {
    const { employee } = req.body
    const warden = await Wardens.findOne({ employee })
    try {
            const employeeHostels = warden.hostel;
            const outpasses = await Previous.find({ hostel: { $in: employeeHostels } });
            return res.status(200).json(outpasses)
    } catch (error) {
        return res.status(500).json({message: "cannot find outpasses"})
    }
}

export const sendPrevOutpassDetails = async (req, res) => {
    const { outpassId } = req.body
    try {
        const outpassDetails = await Previous.findOne({ outpassId })
        if(outpassDetails) {
            return res.status(200).json(outpassDetails)
        }
        else {
            return res.status(404).json({message: "no outpass found"})
        }
    } catch (error) {
        return res.status(500).json({message: "cannot find the details of given outpass"})
    }
}

export const showPrevOutpasses = async (req, res) => {
    const { enrollment } = req.body
    try {
        const outpassList = await Previous.find({ enrollment });
        return res.status(200).json(outpassList)
    } catch (error) {
        return res.status(404).json("no outpass")
    }
}