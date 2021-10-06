const User = require('../model/User');
const Bag = require('../model/Bag');

module.exports = {
    async store(req, res) {
        // const { user } = req.headers;
        // const { bagId } = req.params;

        // const loggedUser = await User.findById(user);
        // const targetBag = await Bag.findById(bagId);

        // if(!targetBag){
        //     return res.status(400).json({ error: 'Bag not exist' });
        // }

        // loggedUser.cart.push(targetBag._id);
        // await loggedUser.save();
        res.json({
            ok : true
        });

    }
}