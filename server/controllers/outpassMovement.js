import outpass from "../models/outpass.js";

export const postAppliedOutpasses = async (req, res) => {
    const { enrollment } = req.body
    try {
        const outpassList = await outpass.find({ enrollment });
        return res.status(200).json(outpassList)
    } catch (error) {
        return res.status(404).json("no outpass")
    }
}

export const showOutpassDetail = async (req, res) => {
    const { id } = req.body
    try {
        const outpass = await outpass.findOne({ id })
        return res.status(200).json(outpass)
    } catch (error) {
        return res.status(500).json({message: "Cannot fetch the details"})
    }
}