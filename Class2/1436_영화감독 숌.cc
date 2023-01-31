#include <iostream>
#include <string>
using namespace std;

int main()
{
	int N, cnt = 0, title = 665;
	cin >> N;

	while (cnt != N) {
		int temp;

		title++;
		temp = title;
		while (temp != 0) {
			if (temp % 1000 == 666) {
				cnt++;
				break;
			}
			else
				temp /= 10;
		}
	}
	cout << title;

	return 0;
}