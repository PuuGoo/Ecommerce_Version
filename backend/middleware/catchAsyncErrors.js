// const catchAsyncErrors = (theFunc) => (req, res, next) => {
//     Promise.resolve(theFunc(req, res, next).catch(next));
// };

// export default catchAsyncErrors;

// Chưa hiểu rõ về promise

const catchAsyncErrors = function (theFunc) {
    return function (req, res, next) {
        Promise.resolve(theFunc(req, res, next).catch(next));
    }
}

export default catchAsyncErrors;
