const User = require('../model/User');

module.exports = {
    async store(req, res){
        // const { name } = req.body;

        // const userExists = await User.findOne({ user: name });

        // if(userExists){
        //     return res.json(userExists);
        // }

        // const user = await User.create({
        //     name
        // });

        return res.json({
            ok : true
        });
    }

}