const { findAnagram } = require("../service/anagram-service");

async function getAnagram(req, res) {
        await findAnagram(req).then(data => {
        res.status(200).json({
            data: data
        });
    }).catch(
        res.status(404)
    )

}


module.exports = getAnagram ;