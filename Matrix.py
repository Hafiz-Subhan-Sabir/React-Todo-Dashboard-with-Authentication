import tkinter as tk
from tkinter import ttk, simpledialog, messagebox
import numpy as np

class MatrixCalculatorApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Matrix Calculator")

        # Matrix input variables
        self.rows_var = tk.IntVar()
        self.columns_var = tk.IntVar()

        # Result variable
        self.result_var = tk.StringVar()

        # Create GUI elements
        self.create_widgets()

    def create_widgets(self):
        # Label and entry for matrix rows
        ttk.Label(self.root, text="Enter the number of rows:").grid(row=0, column=0)
        rows_entry = ttk.Entry(self.root, textvariable=self.rows_var)
        rows_entry.grid(row=0, column=1)

        # Label and entry for matrix columns
        ttk.Label(self.root, text="Enter the number of columns:").grid(row=1, column=0)
        columns_entry = ttk.Entry(self.root, textvariable=self.columns_var)
        columns_entry.grid(row=1, column=1)

        # Button to trigger matrix operations
        ttk.Button(self.root, text="Perform Operation", command=self.perform_operation).grid(row=2, column=0, columnspan=2)

        # Label to display the result
        ttk.Label(self.root, text="Result:").grid(row=3, column=0, columnspan=2)
        result_label = ttk.Label(self.root, textvariable=self.result_var, wraplength=300)
        result_label.grid(row=4, column=0, columnspan=2)

    def perform_operation(self):
        try:
            rows = self.rows_var.get()
            columns = self.columns_var.get()

            matrix1 = self.get_matrix(rows, columns)
            matrix2 = self.get_matrix(columns, rows)

            # Choose the operation based on user input
            choice = self.show_operation_menu()

            if choice == 1:
                result = self.add_matrices(matrix1, matrix2)
            elif choice == 2:
                result = self.subtract_matrices(matrix1, matrix2)
            elif choice == 3:
                scalar = self.get_scalar()
                result = self.scalar_multiply(matrix1, scalar)
            elif choice == 4:
                if matrix1.shape[1] == matrix2.shape[0]:
                    result = self.matrix_multiply(matrix1, matrix2)
                else:
                    raise ValueError("Error: Number of columns in the first matrix must be equal to the number of rows in the second matrix.")
            elif choice == 5:
                if matrix1.shape[1] == matrix1.shape[0]:
                    result = self.inverse_matrix(matrix1)
                else:
                    raise ValueError("Error: Matrix must be square for inversion.")
            else:
                raise ValueError("Invalid choice. Please choose a number between 1 and 5.")

            if result is not None:
                self.result_var.set(result)
        except ValueError as e:
            self.result_var.set(str(e))

    def get_matrix(self, rows, columns):
        matrix = []
        for i in range(rows):
            row = []
            for j in range(columns):
                while True:
                    try:
                        element = float(simpledialog.askstring("Enter Element", f"Enter element at position ({i+1},{j+1}):"))
                        break
                    except ValueError:
                        tk.messagebox.showerror("Error", "Invalid input. Please enter a numeric value.")
                row.append(element)
            matrix.append(row)
        return np.array(matrix)

    def add_matrices(self, matrix1, matrix2):
        try:
            result = np.add(matrix1, matrix2)
            return result
        except ValueError:
            raise ValueError("Error: Matrices must have the same dimensions for addition.")

    def subtract_matrices(self, matrix1, matrix2):
        try:
            result = np.subtract(matrix1, matrix2)
            return result
        except ValueError:
            raise ValueError("Error: Matrices must have the same dimensions for subtraction.")

    def scalar_multiply(self, matrix, scalar):
        try:
            result = scalar * matrix
            return result
        except ValueError:
            raise ValueError("Error: Invalid matrix for scalar multiplication.")

    def matrix_multiply(self, matrix1, matrix2):
        try:
            result = np.dot(matrix1, matrix2)
            return result
        except ValueError:
            raise ValueError("Error: Invalid matrices for multiplication.")

    def inverse_matrix(self, matrix):
        try:
            result = np.linalg.inv(matrix)
            return result
        except np.linalg.LinAlgError:
            raise ValueError("Error: The matrix is singular and does not have an inverse.")

    def show_operation_menu(self):
        choices = ["Add Matrices", "Subtract Matrices", "Scalar Multiply", "Matrix Multiply", "Inverse of Matrix"]
        choice = tk.simpledialog.askinteger("Choose Operation", "\n".join(f"{i + 1}. {op}" for i, op in enumerate(choices)), minvalue=1, maxvalue=len(choices))
        return choice

    def get_scalar(self):
        return float(simpledialog.askstring("Enter Scalar", "Enter the scalar value:"))


if __name__ == "__main__":
    root = tk.Tk()
    app = MatrixCalculatorApp(root)
    root.mainloop()
