
const controller = {
    index : (req, res) => res.render("index"),
    service : (req, res) => res.render("services"),
    admin : (req, res) => res.render("admin"),
    }

    module.exports = controller