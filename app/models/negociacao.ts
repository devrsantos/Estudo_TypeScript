export class Negociacao {

    constructor(
        private _data: Date, 
        private readonly _quantidade: number, 
        private readonly _valor: number
    ) {}

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }
}