#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main() 
{
	int num[5];
	int result = 0;

	for (int i = 0; i < 5; i++) {
		cin >> num[i];
		result += pow(num[i], 2);
	}

	result = result % 10;
	cout << result;

	return 0;

}