import Node from './node';

export default class Linkedlist<T> {
    public firstNode: Node<T>;

    public get CountElements(): number {
        return this.getCountNodes();
    }
    private get LastIndex(): number {
        return this.getCountNodes() - 1;
    }

    public addElement(element: Array<T>);
    public addElement(element: T);
    public addElement(element: T | Array<T>): void {
        if (Array.isArray(element)) {
            element.forEach((e) => this.addElement(e));
        } else {
            const node = new Node<T>();
            node.element = element;
            if (!this.firstNode) {
                this.firstNode = node;
            } else {
                const nextNode: Node<T> = this.getNodeByIndex(this.LastIndex);
                nextNode.nextNode = node;
            }
        }
    }

    private getCountNodes(): number {
        let node: Node<T> = this.firstNode;
        let count = 0;

        while (node !== undefined) {
            count++;
            node = node.nextNode;
        }

        return count;
    }

    private getNodeByIndex(index: number): Node<T> | undefined {
        if (index > -1 && index < this.CountElements) {
            let node: Node<T> = this.firstNode;
            if (index === 0) {
                return node;
            }
            node = this.firstNode.nextNode;
            for (let i = 1; i < index; i++) {
                node = node.nextNode;
            }
            return node;
        }
    }

    public getElementByIndex(index: number): T {
        const node = this.getNodeByIndex(index);

        if (!node) {
            throw new Error('index out of range');
        }
        return node.element;
    }

    public indexOf(comparison: (e: T) => boolean): number {
        let node: Node<T> = this.firstNode;
        let index = -1;
        let position = 0;

        while (node) {
            if (comparison(node.element)) {
                index = position;
                break;
            }
            position++;
            node = node.nextNode;
        }

        return index;
    }

    public find(comparison: (e: T) => boolean): T | undefined {
        let node: Node<T> = this.firstNode;
        let element: T;

        while (node) {
            if (comparison(node.element)) {
                element = node.element;
                break;
            }
            node = node.nextNode;
        }
        return element;
    }
}
