var mongoose = require('mongoose');  
var ImovelSchema = new mongoose.Schema({  
    titulo: String,
    valor: String,
    imgBanner: String,
    localizacao: String,
    descricao: String,
    metragem: String,
    dormitorios: String,
    vagas: String,
    updated_date: { type: Date, default: Date.now },
});
mongoose.model('Imovel', ImovelSchema);

module.exports = mongoose.model('Imovel');
