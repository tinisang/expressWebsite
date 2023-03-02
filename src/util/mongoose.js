module.exports = {
    multipleMongooseToObject: function(arr){
        return arr.map(item => item.toObject())
    },
    mongooseToObject: function(item){
        return item ? item.toObject() : item
    }
}