const User = require('../models/User');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const signup = async (req, res) => {
    try {
        let user = await User.create(req.body);
        const token = createJWT(user);
        res.json({ token });
    } catch (err) {
        res.status(400).json(err);

    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(401).json({ err: 'bad credentials' });
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch) {
                const token = createJWT(user);
                res.json({ token });
            } else {
                return res.status(401).json({ err: 'bad credentials' });
            }
        }
        );
    } catch (err) {
        return res.status(401).json(err);
    }
}

function createJWT(user) {
    return jwt.sign(
        { user }, 
        SECRET,
        { expiresIn: "24h" }
    );
}

module.exports = {
    signup,
    login
}
