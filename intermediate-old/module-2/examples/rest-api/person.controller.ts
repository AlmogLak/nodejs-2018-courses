/*person.controller.ts*/
import { Router } from 'express';

export const router: Router = Router();

router.get('/', (req, res) => {   
    res.send([{ name: 'Danny' }, { name: 'Nabil' }]);
});

router.post('/', (req, res)=>{
    res.send(req.body);
})

router.get(':userId', (req, res) => {
    res.send(req.params.userId);
})