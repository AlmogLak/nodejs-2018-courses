/*person.controller.ts*/
import { Router } from 'express';

export const personRouter: Router = Router();

personRouter.get('/', (req, res) => {   
    res.send([{ name: 'Danny' }, { name: 'Nabil' }]);
});

personRouter.post('/', (req, res)=>{
    res.send(req.body);
})

personRouter.get(':userId', (req, res) => {
    res.send(req.params.userId);
})