BEGIN
-- Scenario 3: Reminders for loans due in next 30 days
    DBMS_OUTPUT.PUT_LINE(CHR(10) || 'Loan Reminders (Due Within 30 Days)');
    FOR loan IN (
        SELECT L.LoanID, L.EndDate, C.Name
        FROM Loans L
        JOIN Customers C ON L.CustomerID = C.CustomerID
        WHERE L.EndDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE('LoanID: ' || loan.LoanID || 
                             ', Customer: ' || loan.Name || 
                             ', Due Date: ' || TO_CHAR(loan.EndDate, 'DD-Mon-YYYY'));
    END LOOP;
COMMIT;
END;
/
