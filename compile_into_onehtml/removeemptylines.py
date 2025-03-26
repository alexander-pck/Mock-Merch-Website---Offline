def remove_empty_lines(file_path):
    with open(file_path, 'r') as file:
        lines = file.readlines()

    non_empty_lines = [line for line in lines if line.strip() != ""]

    with open(file_path, 'w') as file:
        file.writelines(non_empty_lines)

if __name__ == "__main__":
    input_file_path = "./dist/oneindex.html"
    remove_empty_lines(input_file_path)
