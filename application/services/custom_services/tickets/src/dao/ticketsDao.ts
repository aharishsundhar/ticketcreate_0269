import * as mongoose from 'mongoose';
import ticketsModel from '../models/tickets';
import { CustomLogger } from '../config/Logger'


export class ticketsDao {
    private tickets = ticketsModel;
    constructor() { }
public GpCreate(ticketsData, callback){
new CustomLogger().showLogger('info', 'Enter into ticketsDao.ts: GpCreate')
let temp = new ticketsModel(ticketsData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketsDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}