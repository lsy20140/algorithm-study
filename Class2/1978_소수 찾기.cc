#include <iostream>
#include <string>
using namespace std;

int primeNumCount(int a){
    int cnt=0;
    for(int i=1;i<a+1;i++){
        if(a%i==0){
            cnt++;
        }

    }
    return cnt;
    
}
    
int main()
{
	int N, count=0;
	cin >> N;
	int* array = new int[N]();

	for (int i = 0; i < N; i++) {
		cin >> array[i];
		if(primeNumCount(array[i])==2){
		    count++;
		}

	}

	cout<< count;
	
	return 0;

}   