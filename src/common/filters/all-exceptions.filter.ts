import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
    Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    private readonly logger = new Logger(AllExceptionsFilter.name);

    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

    catch(exception: unknown, host: ArgumentsHost): void {
        // In certain situations `httpAdapter` might not be available in the
        // constructor method, thus we should resolve it here.
        const { httpAdapter } = this.httpAdapterHost;

        const ctx = host.switchToHttp();

        const httpStatus =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;

        const responseBody = {
            statusCode: httpStatus,
            timestamp: new Date().toISOString(),
            path: httpAdapter.getRequestUrl(ctx.getRequest()),
            message:
                exception instanceof HttpException
                    ? exception.getResponse()
                    : 'Internal server error',
        };

        // Log the detailed error
        const exceptionResponse = exception instanceof HttpException ? exception.getResponse() : null;
        this.logger.error(
            `Exception caught at ${responseBody.path}`,
            exception instanceof Error ? exception.stack : JSON.stringify(exception),
        );

        if (exceptionResponse && typeof exceptionResponse === 'object') {
            this.logger.error('Exception Details:', JSON.stringify(exceptionResponse, null, 2));
        }

        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
}
