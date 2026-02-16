// The Product interface declares the common behavior for all product variants.
interface Product {
    // Defines an operation that all concrete products must implement.
    operation(): string;
  }
  
  // Concrete Product A implements the Product interface.
  class ConcreteProductA implements Product {
    operation(): string {
      return "ConcreteProductA: Operation executed";
    }
  }
  
  // Concrete Product B implements the Product interface.
  class ConcreteProductB implements Product {
    operation(): string {
      return "ConcreteProductB: Operation executed";
    }
  }
  
  // The Factory class defines a method for creating products.
  class ProductFactory {
    /**
     * Creates and returns a product instance based on the specified type.
     * @param type The type of product to create.
     */
    static createProduct(type: string): Product {
      if (type === "A") {
        return new ConcreteProductA();
      } else if (type === "B") {
        return new ConcreteProductB();
      } else {
        throw new Error("Unknown product type");
      }
    }
  }
  
  const productA = ProductFactory.createProduct("A");
  console.log(productA.operation()); 
  
  const productB = ProductFactory.createProduct("B");
  console.log(productB.operation()); 
  
  // Output:
  // ConcreteProductA: Operation executed
  // ConcreteProductB: Operation executed