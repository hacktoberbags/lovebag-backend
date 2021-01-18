const Bag = require('../model/Bag');

module.exports = {
    async store(req,res) {

        const { name, bio, image, available_colors } = req.body;

        const bagExists = await Bag.findOne({ user: name });

        if(bagExists){
            return res.json(bagExists);
        }

        const bag = await Bag.create({
            name,
            bio,
            image,
            available_colors
        });

        return res.json(bag);
    },

    async index(req, res){
        
        const bags = await Bag.find();
        return res.json(bags);
    }

};