const Bag = require('../model/Bag');
const User = require('../model/User');

module.exports = {
    async store(req,res) {

        const { name, bio, image, available_colors } = req.body;
        // console.log("🚀 ~ file: BagController.js ~ line 8 ~ store ~ available_colors", available_colors);
        // console.log(typeof(available_colors));

        const splits = available_colors.split(",");
        // console.log("🚀 ~ file: BagController.js ~ line 12 ~ store ~ splits", splits);
        // console.log(typeof(splits));

        const bagExists = await Bag.findOne({ name: name });

        if(bagExists){
            return res.json(bagExists);
        }

        const bag = await Bag.create({
            name,
            bio,
            image,
        });

        const bagAux = await Bag.findOne({ name: name });
        // console.log("🚀 ~ file: BagController.js ~ line 28 ~ store ~ bagAux", bagAux);

            splits.forEach(element => {
            console.log("🚀 ~ file: BagController.js ~ line 31 ~ store ~ element", element);
            bagAux.available_colors.push(element);
        });

        await bagAux.save();

        return res.json(bag);
    },

    async indexUser(req, res){

        const { user } = req.headers;
        const loggedUser = await User.findById(user);
        const bags = await Bag.find({
            $and:[
                { _id: { $nin: loggedUser.cart } },
            ],
        });
        return res.json(bags);
    },

    async indexAdm(req, res){
        const bags = await Bag.find();
        
        return res.json(bags);
    }

};