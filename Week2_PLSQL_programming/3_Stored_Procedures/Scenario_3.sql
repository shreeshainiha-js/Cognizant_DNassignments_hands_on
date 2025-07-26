-- PROCEDURE 3: TransferFunds
CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account IN NUMBER,
    p_to_account   IN NUMBER,
    p_amount       IN NUMBER
) AS
    v_balance NUMBER;
    v_new_id NUMBER;
BEGIN
    
    SELECT Balance INTO v_balance FROM Accounts WHERE AccountID = p_from_account FOR UPDATE;

    IF v_balance < p_amount THEN
        DBMS_OUTPUT.PUT_LINE(' Insufficient balance in source account.');
        RETURN;
    END IF;

    
    UPDATE Accounts
    SET Balance = Balance - p_amount, LastModified = SYSDATE
    WHERE AccountID = p_from_account;

  
    UPDATE Accounts
    SET Balance = Balance + p_amount, LastModified = SYSDATE
    WHERE AccountID = p_to_account;

    
    SELECT NVL(MAX(TransactionID), 1000) + 1 INTO v_new_id FROM Transactions;
    INSERT INTO Transactions VALUES (v_new_id, p_from_account, SYSDATE, p_amount, 'Transfer');

    
    SELECT NVL(MAX(TransactionID), 1000) + 1 INTO v_new_id FROM Transactions;
    INSERT INTO Transactions VALUES (v_new_id, p_to_account, SYSDATE, p_amount, 'Transfer');

    DBMS_OUTPUT.PUT_LINE(' Transfer successful.');
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE(' One of the accounts does not exist.');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE(' Error in transfer: ' || SQLERRM);
END;
/
SET SERVEROUTPUT ON;

-- EXECUTE PROCEDURES 
EXEC ProcessMonthlyInterest;
EXEC UpdateEmployeeBonus('IT', 10);
EXEC TransferFunds(2, 3, 500);
