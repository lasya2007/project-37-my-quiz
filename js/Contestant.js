class Contestant{
    constructor(){
        this.index=null;
        this.name=null;
        this.answer=null;
    }

    getCount(){
        database.ref('contestantCount').on("value",function(data){contestantCount=data.val()});
    }

    updateCount(count){
        database.ref('/').set({contestantCount:count});
    }

    update(){
        var contestantIndex = "contestants/contestant"+this.index;
        database.ref(contestantIndex).set({
            name: this.name,
            answer: this.answer
        });
    }

    static getContestantInfo(){
        database.ref('contestants').on("value",(data)=>{
            allContestants=data.val();
        })
    }
}