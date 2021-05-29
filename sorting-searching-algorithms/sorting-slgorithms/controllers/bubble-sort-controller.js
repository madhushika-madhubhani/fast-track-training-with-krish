const { bubblesort } = require("../services/bubblesort-service");

async function bubblesortFunction(req, res) {
        await bubblesort(req).then(data => {
        res.status(200).json({
            data: data
        });
    }).catch(
        res.status(404)
    )

}


module.exports = bubblesortFunction ;