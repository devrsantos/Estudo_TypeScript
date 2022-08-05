export abstract class View<T> {

    protected element: HTMLElement;
    private escapar: boolean = false;

    constructor(selector: string, escapar?: boolean) {
        const element = document.querySelector(selector); 
        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw Error(`Selector ${selector} não existe no Dom. Verifique`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        }
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string;
    
}