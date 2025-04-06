// 使用组合代替继承
export class Mover {
    move(): string {
        return "Moving...";
    }
}

export class Dog {
    private mover: Mover = new Mover();

    bark(): string {
        return "Woof!";
    }

    move(): string {
        return this.mover.move();
    }
}
