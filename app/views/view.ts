export abstract class View<T> {

    protected element: HTMLElement;
    private escapar: boolean = false;

    constructor(selector: string, escapar?: boolean) {
        this.element = document.querySelector(selector);
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