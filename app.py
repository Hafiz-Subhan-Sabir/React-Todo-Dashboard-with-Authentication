from flask import Flask, render_template, request
import numpy as np
import os 

app = Flask(__name__)

@app.route('/')
def index():
    desktop_path = os.path.join(os.path.expanduser('~'), 'Desktop')
    return render_template(os.path.join(desktop_path, 'matrix_calculator.html'))

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        order_a = int(request.form.get('orderA'))
        order_b = int(request.form.get('orderB'))

        matrix_a = get_matrix_from_request('matrixA', order_a)
        matrix_b = get_matrix_from_request('matrixB', order_b)

        operation = request.form.get('operation')

        if operation == 'add':
            result_matrix = add_matrices(matrix_a, matrix_b)
        elif operation == 'subtract':
            result_matrix = subtract_matrices(matrix_a, matrix_b)
        elif operation == 'multiply':
            result_matrix = multiply_matrices(matrix_a, matrix_b)
        elif operation == 'scalar_multiply':
            scalar = float(request.form.get('scalar'))
            result_matrix = scalar_multiply(matrix_a, scalar)
        elif operation == 'inverse':
            result_matrix = inverse_matrix(matrix_a)
        else:
            return "Invalid operation"

        if result_matrix is not None:
            return render_template('matrix_calculator.html', result_matrix=result_matrix.tolist())
        else:
            return "Matrix calculation error"
    except ValueError:
        return "Invalid input"

def get_matrix_from_request(matrix_id, order):
    matrix = []
    for i in range(order):
        row = []
        for j in range(order):
            element = float(request.form.get(f'{matrix_id}[{i}][{j}]'))
            row.append(element)
        matrix.append(row)
    return np.array(matrix)

def add_matrices(matrix1, matrix2):
    try:
        result = matrix1 + matrix2
        return result
    except ValueError:
        print("Error: Matrices must have the same dimensions for addition.")
        return None

def subtract_matrices(matrix1, matrix2):
    try:
        result = matrix1 - matrix2
        return result
    except ValueError:
        print("Error: Matrices must have the same dimensions for subtraction.")
        return None

def scalar_multiply(matrix, scalar):
    try:
        result = scalar * matrix
        return result
    except ValueError:
        print("Error: Invalid matrix for scalar multiplication.")
        return None

def multiply_matrices(matrix1, matrix2):
    try:
        result = np.dot(matrix1, matrix2)
        return result
    except ValueError:
        print("Error: Invalid matrices for multiplication.")
        return None

def inverse_matrix(matrix):
    try:
        result = np.linalg.inv(matrix)
        return result
    except np.linalg.LinAlgError:
        print("Error: The matrix is singular and does not have an inverse.")
        return None

app.run(debug=True)
