#include <iostream>
#include <string>
#include<iomanip>
using namespace std;

int main()
{
	int N;
	int arr[51][3] = { {0,0,0}, };
	int rank;
	cin >> N;

	for (int i = 0; i < N; i++) {
		cin >> arr[i][0] >> arr[i][1];
	}

	for (int i = 0; i < N; i++) {
		rank = 1;
		for (int j = 0; j < N; j++) {
			if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1])
				rank++;
		}
		arr[i][2] = rank;
	}

	for (int i = 0; i < N; i++) {
		cout << arr[i][2] << " ";
	}


	return 0;
}