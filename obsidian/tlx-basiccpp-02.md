### 2B - Perkenalan Variabel

```cpp
#include <iostream>
using namespace std;

int main() {
    int panjang = 364;
    int lebar = 79;

    // cetak luas kandang
    cout << panjang * lebar << endl;

    // cetak keliling kandang
    cout << 2 * (panjang + lebar) << endl;
}
```

### 2C - Memperbarui Nilai Variabel

```cpp
#include <iostream>
using namespace std;

int main() {
    // kata sandi bulan pertama
    int sandi = 174;
    cout << sandi << endl;

    // kata sandi bulan kedua
    sandi = sandi * 23;
    cout << sandi << endl;

    // kata sandi bulan ketiga
    sandi = sandi * 23;
    cout << sandi << endl;
}
```

### 2E - Perkenalan Tipe Data String

```cpp
#include <iostream> // untuk menggunakan cout dan endl
#include <string>   // untuk menggunakan string
using namespace std;

int main() {
    int tanggal = 15;
    int tahun = 2023;

    // jangan lupa bahwa string perlu diapit dengan kutip dua
    string bulan = "Februari"; 

    // cetak kata sandi
    cout << tahun + 10 << "-" << bulan << "-" << tanggal + 7 << endl;
}
```

### 2G - Jual-Beli Bebek

```cpp
#include <iostream>
using namespace std;

int main() {
	int jantan, betina;
 
    // banyaknya bebek saat ini
	jantan = 63;
	betina = 192;
 
    // setelah bulan pertama
	betina = betina + jantan;
	jantan = jantan - (jantan / 3);
 
    // setelah bulan kedua
	jantan = jantan + betina;
	betina = betina - 10;
 
    // cetak total bebek
	cout << jantan + betina << endl;
}
```
