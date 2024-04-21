import outpass from "../models/outpass.js";
import Pending from '../models/PendingOutpass.js'

export const createOutpass = async (req, res) => {
    const outpassData = req.body
    const newOutpass = new outpass({...outpassData});
    const POutpass = new Pending({...outpassData});
    try {
            await newOutpass.save()
            await POutpass.save()
            return res.status(200).json("Outpass saved successfully")
    } catch (error) {
        console.error(error);
        return res.status(409).json({message: "Couldn't post Outpass"})
    }
}