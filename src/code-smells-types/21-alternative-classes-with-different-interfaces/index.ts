abstract class BaseExporter {
    abstract export(data: string): string;

    format(data: string): string {
        return `**${data}**`;
    }
}

export class PdfExporter extends BaseExporter {
    export(data: string): string {
        return `Exporting PDF with content: ${this.format(data)}`;
    }
}

export class WordExporter extends BaseExporter {
    export(data: string): string {
        return `Exporting Word with content: ${this.format(data)}`;
    }
}
