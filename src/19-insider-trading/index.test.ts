import { Portfolio as PortfolioBefore, StockTrader as StockTraderBefore } from "./index.before";
import { Portfolio, StockTrader } from "./index";

describe("Insider Trading Prevention", () => {
    describe("Before Refactoring", () => {
        it("should allow direct manipulation of holdings", () => {
            const portfolio = new PortfolioBefore();
            const trader = new StockTraderBefore();

            trader.executeTrade(portfolio, "AAPL");
            expect(portfolio.getHoldings()).toEqual(["AAPL"]);

            // 直接操作内部数据（坏味道）
            portfolio.getHoldings().push("TSLA");
            expect(portfolio.getHoldings()).toEqual(["AAPL", "TSLA"]);
        });
    });

    describe("After Refactoring", () => {
        it("should prevent direct data manipulation", () => {
            const portfolio = new Portfolio();
            const trader = new StockTrader();

            trader.executeTrade(portfolio, "AAPL");
            expect(portfolio.getHoldings()).toEqual(["AAPL"]);

            // 尝试直接操作内部数据（应该失效）
            const holdingsCopy = portfolio.getHoldings();
            holdingsCopy.push("TSLA");
            expect(portfolio.getHoldings()).toEqual(["AAPL"]); // 内部数据未改变
        });

        it("should maintain valid trading functionality", () => {
            const portfolio = new Portfolio();
            const trader = new StockTrader();

            trader.executeTrade(portfolio, "GOOGL");
            trader.executeTrade(portfolio, "MSFT");

            expect(portfolio.getHoldings()).toEqual(["GOOGL", "MSFT"]);
        });
    });
});