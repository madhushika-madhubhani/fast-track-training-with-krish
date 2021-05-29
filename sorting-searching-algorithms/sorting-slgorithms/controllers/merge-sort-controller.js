const { mergesortAl } = require("../services/merge-service");

async function mergeFunction(req, res) {
        await mergesortAl(req).then(data => {
        res.status(200).json({
            data: data
        });
    }).catch(
        res.status(404)
    )

}

module.exports = mergeFunction ;