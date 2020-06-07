const domain = require('../models/FirebaseConnect');

const database = domain.ref("users/");

function DatabaseController(){

    this.getData = (callback) => {
        database.once('value') 
        .then((snapshot) => {
            if(snapshot.val() != null){
                callback(snapshot.val());
            }else{
                callback({});
            } 
        });
    }

    this.setData = (object) => {

        let {title, url, techs} = object;
        const id = database.push({
            title,
            url,
            techs,
            likes: 0
        }).key;
        return id;
    }

    this.editData = (object) => {
        let {id, title, url, techs} = object;
        database.child(id)
        .update({
        title: title,
        url: url,
        techs: techs    
        });
    }

    this.deleteData = (object) => {
        let {id} = object;
        database.child(id)
        .remove();
    } 

    this.addLike = (object) => {
        let {id} = object;
        let path = id + "/likes";
        database.child(path)
        .once('value')
        .then((oldLikes) => {
            let newLikes = oldLikes.val();
            newLikes++;
            database.child(path)
            .set(newLikes);
        });
    }

}

module.exports = DatabaseController;