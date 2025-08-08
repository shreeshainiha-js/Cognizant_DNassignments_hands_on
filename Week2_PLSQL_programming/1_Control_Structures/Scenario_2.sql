BEGIN
-- Scenario 2: Promote to VIP if Balance > 10,000
    DBMS_OUTPUT.PUT_LINE(CHR(10) || ' VIP Customers (Balance > 10,000) ');
    FOR cust IN (
        SELECT CustomerID, Name, Balance FROM Customers WHERE Balance > 10000
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('CustomerID: ' || cust.CustomerID || 
                             ', Name: ' || cust.Name || 
                             ', Balance: ' || cust.Balance);
    END LOOP;
COMMIT;
END;
/
