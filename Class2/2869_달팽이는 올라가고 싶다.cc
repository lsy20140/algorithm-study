#include <iostream>
#include <string>
using namespace std;

int arrive(int a, int b, int v) {
	if ((v - b) % (a - b) == 0)
		return (v - b) / (a - b);
	else
		return (v - b) / (a - b) + 1;
}

int main()
{
	int a, b, v;
	cin >> a >> b >> v;
	cout << arrive(a, b, v);

	return 0;
}