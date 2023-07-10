import jwt from 'jsonwebtoken';
import models from '../models/index.js'
const { Users } = models

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    console.log(authorization);
    if (!authorization) {
        return res.status(401).json({ message: 'Authorization tolen required' });
    }
    const token = authorization.split(' ')[1];
    console.log('raline 11 token',token);
    try {
        const { _id } = jwt.verify(token, process.env.SECRET);
        console.log('user _id line 14', _id);
        req.user = await Users.findOne({ _id }).select('email');
        console.log(req.user);
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

export default requireAuth;