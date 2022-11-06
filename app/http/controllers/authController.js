const User= require('../../models/user')

function authController()
{
    return{
        login(req,res){
            res.render('auth/login')
        },

        register(req,res){
            // res.render('auth/register')
              
            // res.render('index2.ejs');
            res.sendFile(__dirname+ '/SignUp.html');
        },

        postRegister(req,res){
            const {name,email,password}= req.body

            if(!name || !email || !password){
                req.flash('error', 'All fields are required')
                return res.redirect('/register')
            }

            console.log(req.body)
        }
    }
}

module.exports=authController