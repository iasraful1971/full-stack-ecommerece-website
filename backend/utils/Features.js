class Features  {
    constructor(query , queryStr){
        this.query = query;
        this.queryStr = queryStr
    }
    // search 
    search() {
        const keyword = this.queryStr.keyword ? {
            name : {
                $regex : this.queryStr.keyword,
                $options : "i"
            }
        }: {

        }
      
        this.query = this.query.find({...keyword})
        return this;
    }
    // filter
    filter(){
        const queryCopy = {...this.queryStr};
        //remove some field
        const removeFiends = ["keyword", "page" , "limit"];
        removeFiends.forEach((key) => delete queryCopy[key]);
        this.query = this.query.find(queryCopy);
        return this
    }

    // pagination 
    pagination(resultPerPage){
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultPerPage * (currentPage - 1 );
        this.query = this.query.limit(resultPerPage).skip(skip);
        return this
    }

    
}
module.exports = Features