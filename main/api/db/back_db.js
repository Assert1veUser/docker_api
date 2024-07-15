const {MongoClient: MongoClient} = require('mongodb')
const MongoDBclient = new MongoClient('mongodb://127.0.0.1:27017')
const { ObjectId } = require('mongodb');

const select_medicine = async () =>{
    try {
        await MongoDBclient.connect()
        console.log("Успешно подключились к базе данных")
        const [result_select_medicine] = await Promise.all([MongoDBclient
            .db('pharmacy')
            .collection('medicine')
            .find()
            .toArray()]);
        await MongoDBclient.close()
        return result_select_medicine
    } catch (e) {
        console.log(e)
    }
}

module.exports = {select_medicine};