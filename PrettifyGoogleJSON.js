class PrettifyGoogleJSON {
    constructor(googleData){
        this.newJSON=[];
        let re = /^gsx\$/;
        googleData.feed.entry.forEach(obj=>{
            let temp = {};
            for (let prop in obj) {//TODO tjek substr speed vs reg
                if(re.test(prop)){
                    let parts = prop.split('$')
                    temp[parts[1]]=obj[prop].$t;    
                }
            }
            this.newJSON.push(temp);
        });
    }
        
    get(){
        return this.newJSON;
    }
}    
//module.exports = PrettifyGoogleJSON;