const { quicksort} = require("../services/quick-sort");

async function quickSortCal(req, res) {
        await quicksort(req).then(data => {
        res.status(200).json({
            data: data
        });
    }).catch(
        res.status(404)
    )

}

module.exports = quickSortCal ;