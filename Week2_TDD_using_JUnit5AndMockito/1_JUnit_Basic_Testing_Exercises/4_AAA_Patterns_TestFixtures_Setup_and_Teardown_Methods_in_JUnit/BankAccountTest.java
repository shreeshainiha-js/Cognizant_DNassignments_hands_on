import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class BankAccountTest {

    private BankAccount account;
    @Before
    public void setUp() {
        account = new BankAccount("Shainiha", 1000);
        System.out.println(">> Opening test account with ₹1000 balance");
    }
    @After
    public void tearDown() {
        account = null;
        System.out.println(">> Account test completed\n");
    }
    @Test
    public void testDeposit() {
        int depositAmount = 500;
        account.deposit(depositAmount);
        assertEquals(1500, account.getBalance());
    }
    @Test
    public void testWithdraw() {
        int withdrawAmount = 300;
        account.withdraw(withdrawAmount);
        assertEquals(700, account.getBalance());
    }
    @Test
    public void testWithdrawMoreThanBalance() {
        int withdrawAmount = 1500;
        account.withdraw(withdrawAmount);  
        assertEquals(1000, account.getBalance());  
    }
    @Test
    public void testNegativeDeposit() {
        int depositAmount = -200;
        account.deposit(depositAmount);  
        assertEquals(1000, account.getBalance());
    }
}
