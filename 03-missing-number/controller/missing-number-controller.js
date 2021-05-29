const { findmissingNumber } = require("../servicers/missing-number-service");

async function getMissedNumber(req, res) {
    await findmissingNumber(req).then(data => {
    res.status(200).json({
        data: data
    });
}).catch(
    res.status(404)
)

}
module.exports= getMissedNumber