import java.util.Arrays;
import java.util.Scanner;

class Product implements Comparable<Product> {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public int compareTo(Product other) {
        return Integer.compare(this.productId, other.productId);
    }

    public String toString() {
        return productId + " - " + productName + " (" + category + ")";
    }
}

public class EcommerceSearch {
    // Linear search
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.productId == targetId) {
                return product;
            }
        }
        return null;
    }

    // Binary search
    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (products[mid].productId == targetId) return products[mid];
            else if (products[mid].productId < targetId) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(105, "Laptop", "Electronics"),
            new Product(101, "Shirt", "Clothing"),
            new Product(110, "Shoes", "Footwear"),
            new Product(108, "Book", "Education"),
            new Product(102, "Mobile", "Electronics")
        };

        Product[] sortedProducts = Arrays.copyOf(products, products.length);
        Arrays.sort(sortedProducts);

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter Product ID to search: ");
        int targetId = scanner.nextInt();

        System.out.println("\n--- Linear Search ---");
        Product foundLinear = linearSearch(products, targetId);
        System.out.println(foundLinear != null ? "Product found: " + foundLinear : "Product not found");

        System.out.println("\n--- Binary Search ---");
        Product foundBinary = binarySearch(sortedProducts, targetId);
        System.out.println(foundBinary != null ? "Product found: " + foundBinary : "Product not found");

        System.out.println("\nTime Complexity Comparison:");
        System.out.println("Linear Search -> O(n)");
        System.out.println("Binary Search -> O(log n) [requires sorted data]");

        if (products.length > 10) {
            System.out.println("\n Binary Search is more suitable for large datasets due to faster performance.");
        } else {
            System.out.println("\n Linear Search is fine for small or unsorted datasets.");
        }
    }
}
