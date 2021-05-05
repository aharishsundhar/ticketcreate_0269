import { Request, Response } from 'express';
import { ticketsService } from '../service/ticketsService';
import { CustomLogger } from '../config/Logger'
let tickets = new ticketsService();

export class ticketsController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
tickets.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketsController.ts: GpCreate');
    })}


}