import csv

def convert_csv_to_qif(csv_file, qif_file):
    # Ask the user for the date to include in the output file
    user_date = input("Enter the date for the transactions (MM/DD/YY): ")

    with open(csv_file, mode='r') as file:
        csv_reader = csv.reader(file)
        
        # Open QIF file for writing
        with open(qif_file, mode='w') as qif:
            qif.write("!Type:Bank\n")  # Set the type of account (Bank in this case)
            
            # Skip the header row
            next(csv_reader)
            
            # Iterate over each row in the CSV
            for row in csv_reader:
                amount = row[6]  # Column G (index 6) for Amount
                payee = row[1]   # Column B (index 1) for Payee
                description = row[11]  # Column L (index 11) for Description

                # Write the transaction in QIF format
                qif.write(f"D{user_date}\n")  # Use user-provided date
                qif.write(f"T{amount}\n")     # Transaction Amount
                qif.write(f"P{payee}\n")      # Payee
                qif.write(f"M{description}\n")  # Memo/Description
                qif.write("^\n")              # End of transaction

    print(f"Conversion complete! QIF file saved as {qif_file}")

# Example usage:
csv_file = '/Users/victor/Downloads/All_Tenants_by_Entirety-Positions-2024-09-30-160352.csv'  # Path to your CSV file
qif_file = 'output.qif'  # Output QIF file name

convert_csv_to_qif(csv_file, qif_file)