function homeControllers()
{
    return {
        index(req,res)
        {
            res.render('home');
        }
    }
}

module.exports=homeControllers;