import knex from '../database/connection';
import { Request, Response} from 'express';

class ItemsController{
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*').where(function() {
            this.where('id', '<', 7)
          });
    
        const serializedItems = items.map(item => {
            return { 
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}` , 
                id: item.id,
            };
        });
    
        return response.json(serializedItems);
    }

}

export default ItemsController;