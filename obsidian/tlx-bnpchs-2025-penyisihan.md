https://tlx.toki.id/problems/bnpchs-2025-penyisihan

## A - Pacuan Kuda

### C++

```cpp
#include <iostream>
using namespace std;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);   

	int N, V, D, tercepat;
	float waktu_tercepat = 1000000000.1;
	cin >> N;
	for (int i = 1; i <= N; i++) {
		cin >> V >> D;
		if ((float) D / V < waktu_tercepat) {
			waktu_tercepat = (float) D / V;
			tercepat = i;
		}
	}
	cout << tercepat << "\n";
}
```

### C

```c
#include <stdio.h>

int main() {
	int N, tercepat;
	float V, D, waktu_tercepat = 1000000000.1;
	scanf("%d", &N);
	for (int i = 1; i <= N; i++) {
		scanf("%f %f", &V, &D);
		if (D / V < waktu_tercepat) {
			waktu_tercepat = D / V;
			tercepat = i;
		}
	}
	printf("%d\n", tercepat);
}
```

### Rust

```rust
use std::io::stdin;

fn main() {
    let mut input = String::new();
    stdin().read_line(&mut input).unwrap();
    let n: i32 = input.trim().parse().unwrap();

    let mut tercepat = 0;
    let mut waktu_tercepat = std::f32::MAX;

    for i in 1..=n {
        input.clear();
        stdin().read_line(&mut input).unwrap();
        let mut parts = input.trim().split_whitespace();
        let v: f32 = parts.next().unwrap().parse().unwrap();
        let d: f32 = parts.next().unwrap().parse().unwrap();

        if d / v < waktu_tercepat {
            waktu_tercepat = d / v;
            tercepat = i;
        }
    }

    println!("{}", tercepat);
}
```

## B - Keterangan Tambahan

```cpp
#include <iostream>
#include <map>

using namespace std;

int main() {
	int N, M, K, tmp, L[100001], R[100001];
	map<int, long long int> A, B;
	long long int jumlah = 0;
	cin >> N;
	for (int i = 1; i <= N; i++) {
		cin >> L[i];
	}
	for (int i = 1; i <= N; i++) {
		cin >> R[i];
	}
	cin >> M;
	for (int i = 1; i <= M; i++) {
		cin >> tmp;
		if (A.find(L[tmp]) == A.end()) {
			A[L[tmp]] = 0;
		}
		A[L[tmp]]++;
	}
	for (int i = 1; i <= M; i++) {
		cin >> tmp;
		if (B.find(R[tmp]) == B.end()) {
			B[R[tmp]] = 0;
		}
		B[R[tmp]]++;
	}
	cin >> K;
	for ( const auto &[key, value]: A ) {
		if (B.find(K - key) != B.end()) {
			jumlah += value * B[K - key];
		}
	}
	cout << jumlah << endl;
}
```

### C - Lalu Lintas

```cpp
#include <iostream>
#include <map>
#include <vector>

using namespace std;

int main() {
	int N, L, R;
	map<int, int> acc;
	cin >> N;
	vector<int> result(N + 1, -1);
	while (N--) {
		cin >> L >> R;
		if (acc.find(L) == acc.end()) acc[L] = 0;
		if (acc.find(R + 1) == acc.end()) acc[R + 1] = 0;
		acc[L]++;
		acc[R + 1]--;
	}
	int nyala = 0;
	for ( const auto &[key, value]: acc ) {
		nyala += value;
		if (result[nyala] == -1) result[nyala] = key;
	}
	cout << result[1];
	for (vector<int>::iterator i = result.begin() + 2; i < result.end(); i++) {
		cout << " " << *i;
	}
	cout << endl;
}
```
