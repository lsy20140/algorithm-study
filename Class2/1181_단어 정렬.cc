#include <iostream>
#include <string>
#include <algorithm>
#include <vector>
using namespace std;

bool sort_(string a, string b) {
	if (a.length() == b.length())
		return a < b;
	else
		return a.length() < b.length();
	
}
vector<string> v;

int main()
{
	int N;
	cin >> N;
	string* array = new string[N]();

	for (int i = 0; i < N; i++) {
		cin >> array[i];
		v.push_back(array[i]);
	}

	sort(v.begin(), v.end(), sort_);

	v.erase(unique(v.begin(), v.end()), v.end());
	
	for (int i = 0; i < v.size(); i++)
		cout << v[i] << endl;


	return 0;
}