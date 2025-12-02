import { multerConfig } from './multer-config';
import * as fs from 'fs';

jest.mock('fs', () => ({
    promises: {
        mkdir: jest.fn(),
    },
}));

describe('MulterConfig', () => {
    describe('destination', () => {
        it('should create directory and return it', async () => {
            const req: any = {
                body: {
                    disputaId: 'd1',
                    licitanteId: 'l1',
                    tipoDocumento: 'HABILITACAO',
                },
            };
            const file: any = {};
            const cb = jest.fn();

            const storage: any = multerConfig.storage;
            await storage.getDestination(req, file, cb);

            expect(fs.promises.mkdir).toHaveBeenCalledWith('uploads/d1/l1/HABILITACAO', { recursive: true });
            expect(cb).toHaveBeenCalledWith(null, 'uploads/d1/l1/HABILITACAO');
        });

        it('should handle error during directory creation', async () => {
            const req: any = { body: {} };
            const file: any = {};
            const cb = jest.fn();
            (fs.promises.mkdir as jest.Mock).mockRejectedValue(new Error('Error'));

            const storage: any = multerConfig.storage;
            await storage.getDestination(req, file, cb);

            expect(cb).toHaveBeenCalledWith(expect.any(Error), expect.any(String));
        });
    });

    describe('filename', () => {
        it('should return filename with version', () => {
            const req: any = { body: { versao: '1' } };
            const file: any = {};
            const cb = jest.fn();

            const storage: any = multerConfig.storage;
            storage.getFilename(req, file, cb);

            expect(cb).toHaveBeenCalledWith(null, '1.pdf');
        });
    });

    describe('fileFilter', () => {
        it('should accept pdf files', () => {
            const req: any = {};
            const file: any = { mimetype: 'application/pdf' };
            const cb = jest.fn();

            multerConfig.fileFilter(req, file, cb);

            expect(cb).toHaveBeenCalledWith(null, true);
        });

        it('should reject non-pdf files', () => {
            const req: any = {};
            const file: any = { mimetype: 'image/png' };
            const cb = jest.fn();

            multerConfig.fileFilter(req, file, cb);

            expect(cb).toHaveBeenCalledWith(expect.any(Error), false);
        });
    });
});
