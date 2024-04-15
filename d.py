import os

for i in range(2, 7):
    path2 =  f"./CH1/code/CH{i}"
    file_list = os.listdir(path2)
    print ("file_list: {}".format(file_list))
    for file in file_list:
        print(f'''<a href="code/CH{i}/{file}">{file}</a><br />''')
    print()
    print()