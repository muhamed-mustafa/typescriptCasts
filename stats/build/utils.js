"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dataString) => {
    const dataParts = dataString.split('/').map((value) => {
        return parseInt(value);
    });
    return new Date(dataParts[2], dataParts[1] - 1, dataParts[0]);
};
exports.dateStringToDate = dateStringToDate;
