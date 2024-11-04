import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { userModel } from '../dao/Models/user.model.js';

// Configuración de la estrategia de autenticación
passport.use('login', new LocalStrategy(
    async (dni, contrasena, done) => {
        try {
            const user = await userModel.findOne({ dni });
            if (!user) {
                return done(null, false, { message: 'Usuario no encontrado' });
            }
            // Aquí verifica la contraseña, puedes usar bcrypt para eso
            const isMatch = await user.comparePassword(contrasena); // Asegúrate de tener este método en tu modelo
            if (!isMatch) {
                return done(null, false, { message: 'Contraseña incorrecta' });
            }
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }
));

// Serializar y deserializar el usuario
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await userModel.findById(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});

// Exporta passport
export default passport; // Asegúrate de exportar `passport` como valor por defecto
