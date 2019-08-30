import * as express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    return res.status(200).send({ message: 'Angular Universal working ...' });
});

export default router;
