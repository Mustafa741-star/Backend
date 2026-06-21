import asyncHandler from "../utils/asyncHandler.js"


const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "Mustafa you will be successfull in this world and after world "
    })
})

export default registerUser