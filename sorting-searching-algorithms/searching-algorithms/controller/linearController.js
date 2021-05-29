const { linearSearch } = require("../services/linearSearch");

async function linearSearchFuction(req, res) {
    await linearSearch(req).then(data => {
    res.status(200).json({
        data: data
    });
}).catch(
    res.status(404)
)

}
module.exports={linearSearchFuction}