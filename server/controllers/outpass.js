import outpass from "../models/outpass.js";

export const createOutpass = async (req, res) => {
    const outpassData = req.body
    const newOutpass = new outpass({...outpassData, outpassId: req.outpassI});
    try {
            await newOutpass.save()
            return res.status(200).json("Outpass saved successfully")
    } catch (error) {
        console.error(error);
        return res.status(409).json({message: "Couldn't post Outpass"})
    }
}

export const getAllOutpasses = async (req, res) => {
    const { enrollment } = req.body
    try {
        const outpassList = await outpass.find({ enrollment });
        return res.status(200).json(outpassList)
    } catch (error) {
        return res.status(404).json("no outpass")
    }
}