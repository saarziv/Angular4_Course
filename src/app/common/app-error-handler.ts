import { NotFoundError } from './not-found-error';
import { ErrorHandler } from '@angular/core';

export class AppErrorHandler extends ErrorHandler {
    handleError(error: any) {
        console.log(error);
        alert('An unexpected error occurred.');
    }
}