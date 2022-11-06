const Menu=require('../../models/menu')
function menuControllers()
{
    return {
        async index(req,res)
        {
            const menuItems=await Menu.find()
            res.render('menu',{menuItems:menuItems});
        }
    }
}

module.exports=menuControllers; 