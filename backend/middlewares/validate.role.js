
const isAdminRole = ( req, res, next ) => {

     if ( !req.camper ) {
        return res.status(500).json({
            msg: 'Se quiere verificar el role sin validar el token primero'
        });
    } 

    const { rol, nombre } = req.camper;
    
    if ( rol !== 'ADMIN' ) {
        return res.status(401).json({
            msg: `${ nombre } no es administrador - No puede hacer esto`
        });
    }

    next();
}


export default isAdminRole;