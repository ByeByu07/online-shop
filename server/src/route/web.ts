// const user = require('express').Router();
// const auth = require('express').Router();
// const root = require('express').Router();
// const authController =  require('../role/auth/controller.auth');

// // '/'
// root.get('/', (req:Request, res:Response) => res.send('halaman utama'));

// // '/user'
// user.get('/', ({req, res}:ParametersType) => res.send('halaman dashboard'));

// // '/auth'
// auth.get('/', ({req, res}:ParametersType) => res.send('halaman authenticate'));
// auth.get('/signin', ({req, res}:ParametersType) => res.send('halaman signin'));
// auth.post('/signin', ({req, res}:ParametersType) => authController.signin({req,res}));
// auth.get('/signup', ({req, res}:ParametersType) => res.status(200).json({data:{},message:'success'}));
// auth.post('/signup', ({req,res}:ParametersType) => authController.signup({req,res}));
// auth.post('/forgot-password', ({req,res}:ParametersType) => authController.signup({req,res}));
// auth.post('/change-password', ({req,res}:ParametersType) => authController.signup({req,res}));


// export{ root, user, auth}; // gunakan export{} untuk export menggunakan typescript


