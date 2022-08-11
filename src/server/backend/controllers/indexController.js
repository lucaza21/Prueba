
let  lista = []

const indexController = {

   listar : (req,res) =>{
    res.send(lista)
   },

    primera : (req,res) => {
        res.send('desde primera');
    },

    dataForm: (req,res) => {
        res.render('form')
    },

    dataTextos : (req,res) => {
        
        texto = req.body.texto;
        lista.push(texto);

        //res.redirect('/texts/listar');

        res.render('textos', {lista})
        
        
    },


}

module.exports = indexController;