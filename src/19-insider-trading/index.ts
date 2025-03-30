// 通过方法封装数据操作，防止内部数据暴露
export class Portfolio {
    // 权限修饰符隐藏数据
    private holdings: string[] = [];

    addStock(stock: string): void {
        this.holdings.push(stock);
    }

    getHoldings(): string[] {
        return [...this.holdings]; // 返回副本保护原始数据
    }
}

export class StockTrader {
    executeTrade(portfolio: Portfolio, stock: string) {
        portfolio.addStock(stock); // 通过安全方法操作
    }
}