class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i",
            }
        } : {}

        this.query = this.query.find({
            ...keyword
        })

        // console.log(keyword);
        return this;
    }

    filter() {
        const queryCopy = {
            ...this.queryStr
        }
        console.log(queryCopy);
        // Removing some fields for category
        const removeFields = ["keyword", "page", "limit"]

        removeFields.forEach((key) => delete queryCopy[key])

        // Filter for Price and Rating
        console.log(queryCopy);

        var queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

        this.query = this.query.find(JSON.parse(queryStr))

        console.log(queryStr);
        return this;
    }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1; // currentPage = 2 || 1

        const skip = resultPerPage * (currentPage - 1) // skip = 5*(2-1) = 5

        this.query = this.query.limit(resultPerPage).skip(skip); // bỏ qua 5 cái đầu tiên và lấy 5 cái đầu tiên

        return this;
    }
}

export default ApiFeatures;