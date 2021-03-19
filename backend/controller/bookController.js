const bookModel = require('../model/bookModel');
const userModel = require('../model/userModel');

exports.allBook = async(req, res) => {
    try {
        const allBook = await bookModel.find({});
        if(allBook){
            // return res.json({success: true, data: allBook });
            return res.json(allBook);
        }else{
            return res.json({success: true, message: "no book found" , data: null });
        }
    } catch (error) {
        return res.status(500).json({success: false, message:"an error occured "+error});
    }
};



exports.addBook = async (req, res) => {
    const book = req.body;

    try {
        const newBook = new bookModel({...book, createdBy: req.user._id});
        await newBook.save();

        // return res.json({success: true, message: "book sucessfully created", data: newBook.populate('createdBy') });
        return res.json(newBook);
        
    } catch (error) {
        return res.status(500).json({success: false, message:"an error occured "+error});
    }
};

exports.updateBook = async (req, res) => {

    try {

        const updatedBook = await bookModel.findByIdAndUpdate(req.params.id, req.body , {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        return res.json({success: true, message: "book sucessfully updated", data: updatedBook});
        
    } catch (error) {
        return res.status(500).json({success: false, message:"an error occured"});
        
    }
};

exports.deleteBook = async (req, res) => {

    try {

        await bookModel.findByIdAndDelete(req.params.id, {useFindAndModify: false});

        return res.json({success: true, message: "book sucessfully deleted"});
        
    } catch (error) {
        return res.status(500).json({success: false, message:"an error occured"});
    }
};
