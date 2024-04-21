import outpass from "../models/outpass.js";
import Pending from '../models/PendingOutpass.js'
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