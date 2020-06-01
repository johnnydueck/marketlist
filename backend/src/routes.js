module.exports = function(app){
    const LogonController = require('./controllers/LogonController');

    app.route('/login').get(LogonController.list_all_users).post(LogonController.create_user);

    app.route('/login').get(LogonController.list_users).post(LogonController.create_user);

    app.route('/login/loginId').get(LogonController.read_user).put(LogonController.update_user).delete(LogonController.delete_user);


};