const { selection} = require("../services/selection-service");

async function selectionCal(req, res) {
        await selection(req).then(data => {
        res.status(200).json({
            data: data
        });
    }).catch(
        res.status(404)
    )

}

module.exports = selectionCal ;