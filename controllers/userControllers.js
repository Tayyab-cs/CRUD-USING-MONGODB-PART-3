const User = require('../database/models/user');

exports.createUser = async (req, res) => {

    try {
		const user = await User.create({
			...req.body,
		});
		// const user =  User.create({
		// 	...req.body
		// }).then(user => )
		res.status(200).send(user);
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
    
    // const {name, age, email} = req.body;
    // const userData = new User({
    //     name,
    //     age,
    //     email
    // });

    // try {
    //     const savedData = await userData.save();
    //     res.status(200).send(savedData);
    // } catch (err) {
    //     res.status(400).send({ message: err.message});
    // }
}

exports.getAllUsers = async (req, res) => {
    try{
        const data = await User.find();
        res.send(data);
    } catch(err) {
        res.status(500).send({message: err.message});
    }
}

exports.getOneUser = async (req, res) => {
    try {
        const data = await User.findById(req.params.id);

        res.send(data);
    } catch (err) {
        res.status(500).send({ message: err.message});
    }
}

exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await User.findByIdAndUpdate(id, updatedData, options);

        res.send(result);
    } catch(err) {
        res.status(400).send({ message: err.message });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await User.findByIdAndDelete(id);

        res.send(`Document with ${data.name} has been deleted..`);
    } catch(err) {
        res.status(400).send({ message: err.message});
    }
}