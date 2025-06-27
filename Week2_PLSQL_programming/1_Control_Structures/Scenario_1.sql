BEGIN
    -- Scenario 1: Apply 1% discount for customers older than 60
    DBMS_OUTPUT.PUT_LINE('Customers Above 60 (Interest Discount Applied)');
    FOR cust IN (
        SELECT C.CustomerID, C.Name, TRUNC(MONTHS_BETWEEN(SYSDATE, DOB)/12) AS Age
        FROM Customers C
        WHERE TRUNC(MONTHS_BETWEEN(SYSDATE, DOB)/12) > 60
    ) LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = cust.CustomerID;

        DBMS_OUTPUT.PUT_LINE('CustomerID: ' || cust.CustomerID || 
                             ', Name: ' || cust.Name || 
                             ', Age: ' || cust.Age);
    END LOOP;
COMMIT;
END;
/
