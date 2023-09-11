
def main():
    array = []
    total_input = int(input("Masukan angka yang ingin di jumlah : "))
    for x in range(0,total_input):
        inputan = int(input("Masukan angka : "))
        array.append(inputan)
    print("Total angka setelah di jumlahkan : " , hitung())

def hitung():
    return 123

main()