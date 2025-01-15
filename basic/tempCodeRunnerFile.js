fs.readFile("./contact.txt", "utf-8",   (err,result) => {
             if(err) {
                console.log("not workking",err);
             }
             else{
                console.log(result);
             }
});