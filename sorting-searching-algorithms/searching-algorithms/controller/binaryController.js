const { binarySearch } = require("../services/binarySearch");

async function binarySearchFuction(req, res) {
        await binarySearch(req).then(data => {
        res.status(200).json({
            data: data
        });
    }).catch(
        res.status(404)
    )

}


module.exports = binarySearchFuction ;