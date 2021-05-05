import { Request, Response } from 'express';
import {ticketsDao} from '../dao/ticketsDao';
import { CustomLogger } from '../config/Logger'
let tickets = new ticketsDao();

export class ticketsService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketsService.ts: GpCreate')
     const  ticketsData = req.body;
     tickets.GpCreate(ticketsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketsService.ts: GpCreate')
         callback(response);
         });
    }


}