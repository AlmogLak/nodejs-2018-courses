/*person.controller.ts*/
import { Router } from 'express';

export const personRouter: Router = Router();

personRouter.get('/', (req, res) => {   
    res.send([{ name: 'Almog' }, { name: 'Danny' }]);
});

personRouter.post('/', (req, res)=>{
    res.send(req.body);
})

personRouter.get('/:userId', (req, res) => {
    res.send(req.params.userId);
})