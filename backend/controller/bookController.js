const bookModel = require('../model/bookModel');
const userModel = require('../model/userModel');

exports.allBook = async(req, res) => {
    try {
        const allBook = await bookModel.find({}).populate('createdBy');
        if(allBook){
            return res.status(200).json(allBook);
        }else{
            return res.status(200).json({ message: "no book found", data: null });
        }
    } catch (error) {
        return res.status(500).json({message:"an error occured "+error});
    }
};



exports.addBook = async (req, res) => {
    const book = req.body;

    try {
        const newBook = new bookModel({...book, createdBy: req.user._id});
        await newBook.save();
        
        return res.status(200).json({message: "book created successfully", data: newBook});
        
    } catch (error) {
        return res.status(500).json({message:"an error occured "+error});
    }
};

exports.updateBook = async (req, res) => {

    try {

        const updatedBook = await bookModel.findByIdAndUpdate(req.params.id, req.body , {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        return res.status(200).json({message: "book successfully updated", data: updatedBook});
        
    } catch (error) {
        return res.status(500).json({message:"an error occured"});
        
    }
};

exports.deleteBook = async (req, res) => {
    try {

        await bookModel.findByIdAndDelete(req.params.id, {useFindAndModify: false});

        return res.status(200).json({message: "book successfully deleted"});
    } catch (error) {
        return res.status(500).json({message:"an error occured "+error});
    }
};
