import { diskStorage } from 'multer';
import * as fs from 'fs';
import { Request } from 'express';

export const multerConfig = {
    storage: diskStorage({
        destination: async (req: Request, _file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
            const { disputaId, licitanteId, tipoDocumento } = req.body;
            const dir = `uploads/${disputaId}/${licitanteId}/${tipoDocumento}`;
            try {
                await fs.promises.mkdir(dir, { recursive: true });
                cb(null, dir);
            } catch (err) {
                cb(err as Error, dir);
            }
        },
        filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
            const { versao } = req.body;
            cb(null, `${versao}.pdf`);
        }
    }),
    fileFilter: (req: Request, file: Express.Multer.File, cb: (error: Error | null, acceptFile: boolean) => void) => {
        if (file.mimetype !== 'application/pdf') {
            return cb(new Error('Apenas arquivos PDF são permitidos!'), false);
        }
        cb(null, true);
    },
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB
};
