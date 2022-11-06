const homeController=require("../app/http/controllers/homeControllers");
const authController=require("../app/http/controllers/authController");
const cartController=require("../app/http/controllers/customer/cartController");
const menuController=require("../app/http/controllers/menuController");
function initRoutes(app)
{   
    app.get('/',homeController().index)
    app.get('/login',authController().login)

    app.get('/register',authController().register) 
    app.post('/register',authController().postRegister)


    app.get('/menu',menuController().index)

    app.get('/cart',cartController().index)
    app.post('/update-cart',cartController().update)
}

module.exports=initRoutes; 