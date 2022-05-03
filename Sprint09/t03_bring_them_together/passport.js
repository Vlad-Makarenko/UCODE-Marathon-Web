const localStatege = require('passport-local').Strategy;
const User = require('./models/user');
const bcrypt = require('bcrypt');

module.exports = function initializePassport(passport){
    const authenticateUser = async (login, password, done) => {
        const user = await new User(login).findBy('login', login);
        if(user == null) {
            return done(null, false, {message: 'No user with that login'});
        }

        try{
            if(await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                done(null, false, {message: 'Password incorrect'})
            }
        } catch(e) {
            done(e);
        }
    }
    passport.use(new localStatege({usernameField: 'login'},  authenticateUser));
    passport.serializeUser((user, done) => done(null, user.id)); 
    passport.deserializeUser(async (id, done) => { 
        const userbyId = await new User().findBy('id', id);;
        return done(null, userbyId);
     }); 
}
