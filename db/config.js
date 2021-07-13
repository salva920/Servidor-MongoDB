const mongoose = require('mongoose');

const dbConeccion = async() => {
    try {

        await mongoose.connect( 'mongodb://127.0.0.1/universidad', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    
        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }

}


module.exports = {
    dbConeccion
}
