
import { URLModel } from '../database/model/URL';
import { config } from '../config/Constants';
import { Request, Response } from 'express';
import shortId from 'shortid'

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void>{
        // Ver se a URL ja não existe
        const { originURL } = req.body
        const url = await URLModel.findOne({ originURL })
        if(url){
            res.json(url)
            return
        }
        // Criar o hast pra essa URL
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        // Salvar a URL no banco
        const newURL = await URLModel.create({ originURL , hash, shortURL })
        // retornar a URL que a gente salvou
        res.json({ newURL })
    }
    public async redirect(req: Request, res: Response): Promise<void>{
        // Pegar o hash da URL
        const { hash } = req.params
        // Encotrar a URL original pelo hash 
        const url = await URLModel.findOne({ hash })
        // Redirecionar para a URL origianl a partir do que encotramos no BD
        if(url){
            res.redirect(url.originURL)
            return
        }
        res.status(400).json({ erro: "URL not found" })
    }
}
