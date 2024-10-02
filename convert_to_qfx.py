import csv
import datetime

def convert_csv_to_qfx(csv_file, qfx_file):
    # Ask the user for account and metadata information
    bank_id = input("Enter your bank ID (e.g., 111122223333): ")
    account_id = input("Enter your account ID (e.g., 1234567890): ")
    account_type = input("Enter your account type (CHECKING, SAVINGS, etc.): ")
    
    # Set the date range for the transactions
    start_date = input("Enter the start date for transactions (YYYYMMDD): ")
    end_date = input("Enter the end date for transactions (YYYYMMDD): ")

    with open(csv_file, mode='r') as file:
        csv_reader = csv.reader(file)
        
        with open(qfx_file, mode='w') as qfx:
            # Write QFX headers
            qfx.write("<OFX>\n")
            qfx.write("  <SIGNONMSGSRSV1>\n")
            qfx.write("    <SONRS>\n")
            qfx.write("      <STATUS>\n")
            qfx.write("        <CODE>0</CODE>\n")
            qfx.write("        <SEVERITY>INFO</SEVERITY>\n")
            qfx.write("      </STATUS>\n")
            qfx.write(f"      <DTSERVER>{datetime.datetime.now().strftime('%Y%m%d')}</DTSERVER>\n")
            qfx.write("      <LANGUAGE>ENG</LANGUAGE>\n")
            qfx.write("    </SONRS>\n")
            qfx.write("  </SIGNONMSGSRSV1>\n")
            qfx.write("  <BANKMSGSRSV1>\n")
            qfx.write("    <STMTTRNRS>\n")
            qfx.write("      <TRNUID>1001</TRNUID>\n")
            qfx.write("      <STATUS>\n")
            qfx.write("        <CODE>0</CODE>\n")
            qfx.write("        <SEVERITY>INFO</SEVERITY>\n")
            qfx.write("      </STATUS>\n")
            qfx.write("      <STMTRS>\n")
            qfx.write("        <CURDEF>USD</CURDEF>\n")
            qfx.write("        <BANKACCTFROM>\n")
            qfx.write(f"          <BANKID>{bank_id}</BANKID>\n")
            qfx.write(f"          <ACCTID>{account_id}</ACCTID>\n")
            qfx.write(f"          <ACCTTYPE>{account_type}</ACCTTYPE>\n")
            qfx.write("        </BANKACCTFROM>\n")
            qfx.write("        <BANKTRANLIST>\n")
            qfx.write(f"          <DTSTART>{start_date}</DTSTART>\n")
            qfx.write(f"          <DTEND>{end_date}</DTEND>\n")
            
            # Skip the header row
            next(csv_reader)
            
            # Iterate over each row in the CSV and write transactions
            for index, row in enumerate(csv_reader, start=1001):
                amount = row[6]  # Column G for Amount
                payee = row[1]   # Column B for Payee
                description = row[11]  # Column L for Description

                # Write each transaction in QFX format
                qfx.write("          <STMTTRN>\n")
                qfx.write(f"            <TRNTYPE>{'CREDIT' if float(amount) > 0 else 'DEBIT'}</TRNTYPE>\n")
                qfx.write(f"            <DTPOSTED>{end_date}</DTPOSTED>\n")  # Set the same end date for simplicity
                qfx.write(f"            <TRNAMT>{amount}</TRNAMT>\n")
                qfx.write(f"            <FITID>{index}</FITID>\n")  # Unique ID for each transaction
                qfx.write(f"            <NAME>{payee}</NAME>\n")
                qfx.write(f"            <MEMO>{description}</MEMO>\n")
                qfx.write("          </STMTTRN>\n")
            
            # End the QFX structure
            qfx.write("        </BANKTRANLIST>\n")
            qfx.write("      </STMTRS>\n")
            qfx.write("    </STMTTRNRS>\n")
            qfx.write("  </BANKMSGSRSV1>\n")
            qfx.write("</OFX>\n")

    print(f"Conversion complete! QFX file saved as {qfx_file}")

# Example usage
csv_file = '/Users/victor/Library/Mobile Documents/com~apple~CloudDocs/🤪VICTOR😍/BYUI/wdd131/All_Tenants_by_Entirety-Positions-2024-09-30-160352.csv'
qfx_file = 'output.qfx'

convert_csv_to_qfx(csv_file, qfx_file)