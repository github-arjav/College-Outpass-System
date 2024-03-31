import outpass from "../models/outpass.js";
import sPending from '../models/studentPendingOutpass.js'
import wPending from '../models/wardenPendingOutpass.js'

export const createOutpass = async (req, res) => {
    const outpassData = req.body
    const newOutpass = new outpass({...outpassData});
    const newSPOutpass = new sPending({...outpassData});
    const newWPOutpass = new wPending({...outpassData});
    try {
            await newOutpass.save()
            await newSPOutpass.save()
            await newWPOutpass.save()
            return res.status(200).json("Outpass saved successfully")
    } catch (error) {
        console.error(error);
        return res.status(409).json({message: "Couldn't post Outpass"})
    }
}