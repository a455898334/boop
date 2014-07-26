/*
 * GET home page.
 */

exports.game = function(req, res){
  res.render('dropdown', { title: 'Why would you take my domain' });
};
