import Product from "../models/productModel.js"
import ErrorHander from "../utils/errorhander.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js"
import ApiFeatures from "../utils/apifeatures.js";

// Create Product -- Admin
const createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(200).json({
        success: true,
        product
    })
})

// Get All Product

const getAllProducts = catchAsyncErrors(async (req, res) => {

    const resultPerPage = 5;
    const productCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage)
    const products = await apiFeature.query;

    res.status(200).json({
        success: true,
        products,
        productCount
    })
})

// Get Product Details

const getProductDetails = catchAsyncErrors(async (req, res, next) => {
    await Product.findById(req.params.id)
        .then((product) => {
            return res.status(200).json({
                success: true,
                product
            })
        }).catch(() => {
            return next(new ErrorHander("Product not found", 404));
        })
})

// Update Product --Admin

const updateProduct = catchAsyncErrors(async (req, res, next) => {
    var product = await Product.findById(req.params.id)
        .catch(() => {
            return res.status(500).json({
                success: false,
                message: "Product not found"
            })
        })


    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product
    })
})

// Delete Product

const deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id)
        .catch(() => {
            return res.status(500).json({
                success: false,
                message: "Product not found"
            })
        })


    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: "Product Delete Successfully"
    })
})



export default getAllProducts;

export {
    createProduct,
    updateProduct,
    deleteProduct,
    getProductDetails
}