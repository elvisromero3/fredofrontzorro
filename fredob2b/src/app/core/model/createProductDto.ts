interface BaseDto {
    Id: number;
    ModifiedDate : Date
}

interface CreateProduct {
    ProductName: string;
    ProductCode: string;
    FinishedGoodsFlag: string;
    Color: string;
    SafetyStockLevel: number;
    ReorderPoint: number;
    StandardCost: number;
    ListPrice: number;
    QuantityPerUnit?: number;
    UnitPrice?: number;
    UnitsInStock?: number;
    UnitsOnOrder?: number;
    ReorderLevel?: number;
    CategoryId?: number;       
}
