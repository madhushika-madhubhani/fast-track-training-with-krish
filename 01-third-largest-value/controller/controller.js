const { findThirdLargest } = require("../service/thirdLargestValue-service");

async function thirdLargestValue(req, res) {
        await findThirdLargest(req).then(data => {
        res.status(200).json({
            data: data
        });
    }).catch(
        res.status(404)
    )

}


module.exports = thirdLargestValue ;